import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, LogIn } from 'lucide-react';
// Header et Footer sont gérés par MainLayout (Navigation)
import { useTranslation } from 'react-i18next';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [shake, setShake] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setShake(false);
    try {
      // Simulation d'échec pour montrer l'animation de shake (remplace par ta logique réelle)
      setTimeout(() => {
        setLoading(false);
        setError(t('login.error', 'Erreur lors de la connexion'));
        setShake(true);
        setTimeout(() => setShake(false), 600);
      }, 1200);
      // Pour succès, décommente :
      // setTimeout(() => { window.location.reload(); }, 1200);
    } catch {
      setError(t('login.error', 'Erreur lors de la connexion'));
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-gradient-to-r from-blue-50 to-turquoise-50 dark:from-gray-800 dark:to-gray-700 pt-24 pb-24 overflow-x-hidden">
      {/* Bande blanche entre le header et le bloc login */}
      <div className="h-8 w-full bg-white"></div>
      <div className="flex-1 flex items-center justify-center p-4 animate-fadeInUp">
        <div className="w-full max-w-md">
          {/* Bouton retour à l'accueil */}
          <div className="mb-6">
            <Link to="/" className="inline-flex items-center text-slate-300 hover:text-white transition-colors duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green">
              <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
              {t('login.backToHome', "Retour à l'accueil")}
            </Link>
          </div>
          <div className="text-center mb-6">
            <img
              src="/assets/images/logos/logo.svg"
              alt="Ekose-Rx"
              className="h-14 mx-auto mb-2 drop-shadow-xl animate-fadeIn"
            />
            <div className="text-lg font-semibold text-blue-primary dark:text-white animate-fadeIn delay-100">
              {t('login.premiumSlogan', "Accédez à la santé de demain, aujourd'hui.")}
            </div>
          </div>
          <div className={`bg-white/90 dark:bg-slate-900/80 backdrop-blur-2xl rounded-2xl p-8 shadow-2xl border-2 border-turquoise-200/60 dark:border-blue-900/40 animate-zoomFadeIn ${shake ? 'animate-shake' : ''}`}>
            <h1 className="text-2xl font-extrabold text-center text-blue-primary dark:text-white mb-8 tracking-tight animate-fadeIn delay-100">{t('login.title', 'Se connecter')}</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-primary dark:text-slate-300 mb-2">{t('login.emailLabel', 'Adresse email')}</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white/80 dark:bg-white/10 border border-slate-500/30 rounded-lg text-blue-primary dark:text-white placeholder-slate-400 dark:placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-primary-green focus:bg-white/90 dark:focus:bg-white/15 transition-all duration-200 shadow-md"
                  placeholder={t('login.emailPlaceholder', 'votre@email.com')}
                  autoComplete="email"
                  aria-label={t('login.emailLabel', 'Adresse email')}
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-blue-primary dark:text-slate-300 mb-2">{t('login.passwordLabel', 'Mot de passe')}</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white/80 dark:bg-white/10 border border-slate-500/30 rounded-lg text-blue-primary dark:text-white placeholder-slate-400 dark:placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-primary-green focus:bg-white/90 dark:focus:bg-white/15 transition-all duration-200 shadow-md"
                  placeholder={t('login.passwordPlaceholder', '••••••••')}
                  autoComplete="current-password"
                  aria-label={t('login.passwordLabel', 'Mot de passe')}
                />
                <div className="flex justify-end mt-2">
                  <Link to="/forgot-password" className="text-xs text-primary-green hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green animate-fadeIn delay-200">
                    {t('login.forgotPassword', 'Mot de passe oublié ?')}
                  </Link>
                </div>
              </div>
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 animate-fadeIn">
                  <p className="text-sm text-red-400">{error}</p>
                </div>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-primary-green via-teal-400 to-blue-400 hover:from-green-600 hover:to-blue-500 disabled:bg-green-900 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2 focus:ring-offset-slate-800 shadow-xl animate-glow ring-2 ring-primary-green/30 flex items-center justify-center gap-2 text-lg"
              >
                {loading ? (
                  <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                ) : (
                  <LogIn className="h-5 w-5" />
                )}
                {loading ? t('login.loading', 'Connexion...') : t('login.submit', 'Se connecter')}
              </button>

            </form>
            <div className="mt-6 text-center animate-fadeIn delay-200">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {t('login.noAccount', 'Pas encore de compte?')}{' '}
                <Link
                  to="/register"
                  className="text-primary-green hover:text-green-700 font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green"
                >
                  {t('login.register', "S'inscrire")}
                </Link>
              </p>
            </div>
            <div className="mt-4 text-center animate-fadeIn delay-300">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t('login.redirectInfo', "Vous serez redirigé vers l'application Ekose RX")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;