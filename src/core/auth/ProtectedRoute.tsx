import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { LoadingSpinner } from '../../shared/components/LoadingSpinner';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: string[];
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  allowedRoles 
}) => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  useEffect(() => {
    // Vérifier si le token est expiré
    const checkTokenExpiration = () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const tokenData = JSON.parse(atob(token.split('.')[1]));
          if (tokenData.exp * 1000 < Date.now()) {
            // Token expiré, déconnexion
            localStorage.removeItem('token');
            window.location.href = '/auth/login';
          }
        } catch (error) {
          console.error('Erreur de vérification du token:', error);
          localStorage.removeItem('token');
          window.location.href = '/auth/login';
        }
      }
    };

    checkTokenExpiration();
    const interval = setInterval(checkTokenExpiration, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!isAuthenticated) {
    // Rediriger vers la page de connexion en sauvegardant l'URL d'origine
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    // Rediriger vers le tableau de bord approprié selon le rôle
    const dashboardPath = `/${user.role}/dashboard`;
    return <Navigate to={dashboardPath} replace />;
  }

  return <>{children}</>;
}; 