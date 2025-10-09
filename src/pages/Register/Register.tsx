import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Register: React.FC = () => {
  const { t } = useTranslation();
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
        {/* Bouton retour à l'accueil */}
        <div className="mb-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-slate-300 hover:text-white transition-colors duration-200 group"
          >
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            {t('register.backToHome')}
          </Link>
        </div>

        <div className="text-center mb-8">
          <img 
            src="/assets/images/logos/logo.svg" 
            alt="Ekose-Rx" 
            className="h-12 mx-auto mb-4"
          />
        </div>
        
        <div className="bg-slate-800/70 backdrop-blur-md rounded-xl p-8 shadow-2xl border border-slate-600/30 max-h-[80vh] overflow-y-auto">
          <h1 className="text-2xl font-semibold text-center text-white mb-8">{t('register.title')}</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">{t('register.fullName')}</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white/10 border border-slate-500/30 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:bg-white/15 transition-all duration-200"
                placeholder={t('register.fullNamePlaceholder')}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">{t('register.email')}</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white/10 border border-slate-500/30 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:bg-white/15 transition-all duration-200"
                placeholder={t('register.emailPlaceholder')}
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">{t('register.password')}</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white/10 border border-slate-500/30 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:bg-white/15 transition-all duration-200"
                placeholder={t('register.passwordPlaceholder')}
              />
            </div>
            
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-slate-300 mb-2">{t('register.role')}</label>
              <select 
                id="role" 
                value={role} 
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-slate-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:bg-white/15 transition-all duration-200"
              >
                <option value="patient">{t('register.patient')}</option>
                <option value="doctor">{t('register.doctor')}</option>
              </select>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="region" className="block text-sm font-medium text-slate-300 mb-2">{t('register.region')}</label>
                <input
                  id="region"
                  type="text"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-slate-500/30 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:bg-white/15 transition-all duration-200"
                  placeholder={t('register.regionPlaceholder')}
                />
              </div>
              
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-slate-300 mb-2">{t('register.city')}</label>
                <input
                  id="city"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-slate-500/30 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:bg-white/15 transition-all duration-200"
                  placeholder={t('register.cityPlaceholder')}
                />
              </div>
              
              <div>
                <label htmlFor="residence" className="block text-sm font-medium text-slate-300 mb-2">{t('register.residence')}</label>
                <input
                  id="residence"
                  type="text"
                  value={residence}
                  onChange={(e) => setResidence(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-slate-500/30 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:bg-white/15 transition-all duration-200"
                  placeholder={t('register.residencePlaceholder')}
                />
              </div>
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-slate-300 mb-2">{t('register.phoneNumber')}</label>
              <input
                id="phoneNumber"
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white/10 border border-slate-500/30 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:bg-white/15 transition-all duration-200"
                placeholder={t('register.phoneNumberPlaceholder')}
              />
            </div>

            {role === 'doctor' && (
              <div className="space-y-4 p-4 bg-slate-700/30 rounded-lg border border-slate-600/50">
                <h3 className="text-sm font-medium text-slate-300 mb-3">{t('register.medicalInfo')}</h3>
                <div>
                  <label htmlFor="specialty" className="block text-sm font-medium text-slate-300 mb-2">{t('register.specialty')}</label>
                  <input
                    id="specialty"
                    type="text"
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-slate-500/30 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:bg-white/15 transition-all duration-200"
                    placeholder={t('register.specialtyPlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="licenseNumber" className="block text-sm font-medium text-slate-300 mb-2">{t('register.licenseNumber')}</label>
                  <input
                    id="licenseNumber"
                    type="text"
                    value={licenseNumber}
                    onChange={(e) => setLicenseNumber(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-slate-500/30 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:bg-white/15 transition-all duration-200"
                    placeholder={t('register.licenseNumberPlaceholder')}
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
              {loading ? t('register.submitting') : t('register.submit')}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-400">
              {t('register.alreadyAccount')}{' '}
              <Link 
                to="/login" 
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
              >
                {t('register.loginLink')}
              </Link>
            </p>
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-slate-500">
              {t('register.redirectNotice')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
