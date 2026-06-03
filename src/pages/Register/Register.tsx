import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, LogIn } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const Register: React.FC = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('patient');
  const [region, setRegion] = useState('');
  const [city, setCity] = useState('');
  const [residence, setResidence] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [shake, setShake] = useState(false);

  // Injection CSS animations premium (zoomFadeIn, shake, glow)
  useEffect(() => {
    if (typeof window !== 'undefined' && !document.getElementById('register-animations')) {
      const style = document.createElement('style');
      style.id = 'register-animations';
      style.innerHTML = `
        @keyframes zoomFadeIn {
          0% { opacity: 0; transform: scale(0.95) translateY(40px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-zoomFadeIn { animation: zoomFadeIn 0.7s cubic-bezier(.4,2,.3,1) both; }
        @keyframes shake {
          10%, 90% { transform: translateX(-2px); }
          20%, 80% { transform: translateX(4px); }
          30%, 50%, 70% { transform: translateX(-8px); }
          40%, 60% { transform: translateX(8px); }
        }
        .animate-shake { animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both; }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 16px 2px #22c55e55, 0 2px 8px 0 #0002; }
          50% { box-shadow: 0 0 32px 8px #38bdf8aa, 0 2px 8px 0 #0002; }
        }
        .animate-glow { animation: glow 2s infinite alternate; }
      `;
      document.head.appendChild(style);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setShake(false);
    try {
      // Simulation d'échec pour montrer l'animation de shake (remplace par ta logique réelle)
      setTimeout(() => {
        setLoading(false);
        setError(t('register.error', "Erreur lors de l'inscription"));
        setShake(true);
        setTimeout(() => setShake(false), 600);
      }, 1200);
      // Pour succès, décommente :
      // setTimeout(() => { window.location.reload(); }, 1200);
    } catch {
      setError(t('register.error', "Erreur lors de l'inscription"));
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-gradient-to-r from-blue-50 to-turquoise-50 dark:from-gray-800 dark:to-gray-700 pt-24 pb-24 overflow-x-hidden">
      <Helmet>
        <title>{t('seo.register.title')}</title>
        <meta name="description" content={t('seo.register.description')} />
      </Helmet>
      {/* Bande blanche entre le header et le bloc register */}
      <div className="h-8 w-full bg-white"></div>
      <div className="flex-1 flex items-center justify-center p-4 animate-fadeInUp">
        <div className="w-full max-w-md">
          {/* Bouton retour à l'accueil */}
          <div className="mb-6">
            <Link to="/" className="inline-flex items-center text-slate-300 hover:text-white transition-colors duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green">
              <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
              {t('register.backToHome', "Retour à l'accueil")}
            </Link>
          </div>
          <div className="text-center mb-6">
            <img
              src="/assets/images/logos/logo.svg"
              alt="Ekose-Rx"
              className="h-14 mx-auto mb-2 drop-shadow-xl animate-fadeIn"
            />
            <div className="text-lg font-semibold text-blue-primary dark:text-white animate-fadeIn delay-100">
              {t('register.premiumSlogan', "Créez votre compte santé premium.")}
            </div>
          </div>
          <div className={`bg-white/90 dark:bg-slate-900/80 backdrop-blur-2xl rounded-2xl p-8 shadow-2xl border-2 border-turquoise-200/60 dark:border-blue-900/40 animate-zoomFadeIn max-h-[80vh] overflow-y-auto ${shake ? 'animate-shake' : ''}`}>
            <h1 className="text-2xl font-extrabold text-center text-blue-primary dark:text-white mb-8 tracking-tight animate-fadeIn delay-100">{t('register.title', 'Créer un compte')}</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">{t('register.fullName')}</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white/70 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-primary-green shadow-sm transition-all duration-200"
                  placeholder={t('register.fullNamePlaceholder')}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">{t('register.email')}</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white/70 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-primary-green shadow-sm transition-all duration-200"
                  placeholder={t('register.emailPlaceholder')}
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">{t('register.password')}</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white/70 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-primary-green shadow-sm transition-all duration-200"
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
                  <label htmlFor="region" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">{t('register.region')}</label>
                  <input
                    id="region"
                    type="text"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-white/70 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-primary-green shadow-sm transition-all duration-200"
                    placeholder={t('register.regionPlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">{t('register.city')}</label>
                  <input
                    id="city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-white/70 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-primary-green shadow-sm transition-all duration-200"
                    placeholder={t('register.cityPlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="residence" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">{t('register.residence')}</label>
                  <input
                    id="residence"
                    type="text"
                    value={residence}
                    onChange={(e) => setResidence(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-white/70 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-primary-green shadow-sm transition-all duration-200"
                    placeholder={t('register.residencePlaceholder')}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">{t('register.phoneNumber')}</label>
                <input
                  id="phoneNumber"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white/70 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-primary-green shadow-sm transition-all duration-200"
                  placeholder={t('register.phoneNumberPlaceholder')}
                />
              </div>
              {role === 'doctor' && (
                <div className="space-y-4 p-4 bg-slate-700/30 rounded-lg border border-slate-600/50">
                  <h3 className="text-sm font-medium text-slate-700 dark:text-slate-200 mb-3">{t('register.medicalInfo')}</h3>
                  <div>
                    <label htmlFor="specialty" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">{t('register.specialty')}</label>
                    <input
                      id="specialty"
                      type="text"
                      value={specialty}
                      onChange={(e) => setSpecialty(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-white/70 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-primary-green shadow-sm transition-all duration-200"
                      placeholder={t('register.specialtyPlaceholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="licenseNumber" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">{t('register.licenseNumber')}</label>
                    <input
                      id="licenseNumber"
                      type="text"
                      value={licenseNumber}
                      onChange={(e) => setLicenseNumber(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-white/70 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-primary-green shadow-sm transition-all duration-200"
                      placeholder={t('register.licenseNumberPlaceholder')}
                    />
                  </div>
                </div>
              )}
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
                {loading ? t('register.submitting') : t('register.submit')}
              </button>
            </form>
            <div className="mt-6 text-center animate-fadeIn delay-200">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {t('register.alreadyAccount')}{' '}
                <Link
                  to="/login"
                  className="text-primary-green hover:text-green-700 font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green"
                >
                  {t('register.loginLink')}
                </Link>
              </p>
            </div>
            <div className="mt-4 text-center animate-fadeIn delay-300">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t('register.redirectNotice')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
