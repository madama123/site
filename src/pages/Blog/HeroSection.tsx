import { InputHTMLAttributes, forwardRef } from 'react';
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