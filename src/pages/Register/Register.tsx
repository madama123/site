import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<string>('patient');
  const [region, setRegion] = useState('');
  const [city, setCity] = useState('');
  const [residence, setResidence] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [loading] = useState(false);
  const [error] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Préparer les données pour la redirection
    const userData = {
      name,
      email,
      password,
      role,
      region,
      city,
      residence,
      phoneNumber,
      ...(role === 'doctor' && { specialty, licenseNumber })
    };

    // Redirection vers l'application principale sur le port 5173
    const params = new URLSearchParams();
    Object.entries(userData).forEach(([key, value]) => {
      if (value) params.append(key, value.toString());
    });
    
    const appUrl = `http://localhost:5173/register?${params.toString()}`;
    window.location.href = appUrl;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img 
            src="/assets/images/logos/logo.svg" 
            alt="Ekose-Rx" 
            className="h-12 mx-auto mb-4"
          />
        </div>
        
        <div className="bg-slate-800/70 backdrop-blur-md rounded-xl p-8 shadow-2xl border border-slate-600/30 max-h-[80vh] overflow-y-auto">
          <h1 className="text-2xl font-semibold text-center text-white mb-8">S'inscrire</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Nom complet</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white/10 border border-slate-500/30 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:bg-white/15 transition-all duration-200"
                placeholder="Votre nom complet"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Adresse email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white/10 border border-slate-500/30 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:bg-white/15 transition-all duration-200"
                placeholder="votre@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">Mot de passe</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white/10 border border-slate-500/30 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:bg-white/15 transition-all duration-200"
                placeholder="••••••••"
              />
            </div>
            
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-slate-300 mb-2">Je suis un</label>
              <select 
                id="role" 
                value={role} 
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-slate-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:bg-white/15 transition-all duration-200"
              >
                <option value="patient">Patient</option>
                <option value="doctor">Médecin</option>
              </select>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="region" className="block text-sm font-medium text-slate-300 mb-2">Région</label>
                <input
                  id="region"
                  type="text"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-slate-500/30 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:bg-white/15 transition-all duration-200"
                  placeholder="Votre région"
                />
              </div>
              
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-slate-300 mb-2">Ville</label>
                <input
                  id="city"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-slate-500/30 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:bg-white/15 transition-all duration-200"
                  placeholder="Votre ville"
                />
              </div>
              
              <div>
                <label htmlFor="residence" className="block text-sm font-medium text-slate-300 mb-2">Lieu de résidence</label>
                <input
                  id="residence"
                  type="text"
                  value={residence}
                  onChange={(e) => setResidence(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-slate-500/30 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:bg-white/15 transition-all duration-200"
                  placeholder="Adresse complète"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-slate-300 mb-2">Numéro de téléphone</label>
              <input
                id="phoneNumber"
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white/10 border border-slate-500/30 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:bg-white/15 transition-all duration-200"
                placeholder="+237 6 XX XX XX XX"
              />
            </div>

            {role === 'doctor' && (
              <div className="space-y-4 p-4 bg-slate-700/30 rounded-lg border border-slate-600/50">
                <h3 className="text-sm font-medium text-slate-300 mb-3">Informations médicales</h3>
                <div>
                  <label htmlFor="specialty" className="block text-sm font-medium text-slate-300 mb-2">Spécialité</label>
                  <input
                    id="specialty"
                    type="text"
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-slate-500/30 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:bg-white/15 transition-all duration-200"
                    placeholder="Ex: Médecine générale, Cardiologie..."
                  />
                </div>
                <div>
                  <label htmlFor="licenseNumber" className="block text-sm font-medium text-slate-300 mb-2">Numéro de licence médicale</label>
                  <input
                    id="licenseNumber"
                    type="text"
                    value={licenseNumber}
                    onChange={(e) => setLicenseNumber(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-slate-500/30 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:bg-white/15 transition-all duration-200"
                    placeholder="Numéro CNOM ou équivalent"
                  />
                </div>
              </div>
            )}

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}
            
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800"
            >
              {loading ? 'Inscription...' : 'S\'inscrire'}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-400">
              Déjà un compte?{' '}
              <Link 
                to="/login" 
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
              >
                Se connecter
              </Link>
            </p>
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-slate-500">
              Vous serez redirigé vers l'application Ekose RX
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
