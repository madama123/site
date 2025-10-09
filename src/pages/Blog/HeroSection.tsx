import { InputHTMLAttributes, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative h-[480px] md:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Image de fond floutée */}
      <div className="absolute inset-0 bg-cover bg-center z-0 bg-[url('/assets/images/blog/young-handsome-physician-medical-robe-with-stethoscope.png')] bg-blend-overlay filter blur-sm brightness-80"></div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center justify-center px-4 text-center"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-xl">
          {t('blog.heroTitle', 'We inform you for')} <br />
          <span className="text-blue-primary animate-pulse">{t('blog.heroSubtitle', 'better prevention.')}</span>
        </h1>
        <div className="relative w-full max-w-xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-center">
          <Input
            type="search"
            placeholder={t('blog.searchPlaceholder', 'Search subject')}
            className="w-full h-12 pl-4 pr-12 rounded-full bg-white/95 shadow-lg"
          />
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 bg-blue-primary text-white font-bold rounded-full shadow-lg hover:bg-blue-700 transition"
            aria-label={t('blog.cta', 'See all articles')}
            onClick={() => window.location.href = '/blog'}
          >
            {t('blog.cta', 'See all articles')}
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

export function BlogHeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative h-[500px] flex items-center justify-start">
      <div
        className="absolute inset-0 bg-cover bg-center z-0 bg-[url('/assets/images/blog/young-handsome-physician-medical-robe-with-stethoscope.png')] bg-blend-overlay"
      ></div>
      <div className="relative z-10 max-w-4xl mx-auto md:mt-10 md:ml-24 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
          {t('blog.heroTitle', 'We inform you for')} <br />
          <span className="text-blue-primary">{t('blog.heroSubtitle', 'better prevention.')}</span>
        </h1>
        <div className="relative max-w-xl mx-auto">
          <Input
            type="search"
            placeholder={t('blog.searchPlaceholder', 'Search subject')}
            className="w-full h-12 pl-4 pr-12 rounded-full bg-white/95"
          />
        </div>
      </div>
    </section>
  );
}