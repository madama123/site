import React from 'react';
import { useTranslation } from 'react-i18next';
import { BlogHeroSection } from './HeroSection';
import { BlogPosts } from './BlogPosts';
import OlderArticles from './OlderArticles';

const Blog: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <BlogHeroSection />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          {t('blog.title', 'Welcome to our Blog')}
        </h1>
        <BlogPosts />
        <OlderArticles />
      </div>
    </div>
  );
};

export default Blog;