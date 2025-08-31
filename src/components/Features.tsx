import { Video, Clock, FileText, Shield } from 'lucide-react';

const features = [
  {
    name: 'Consultation vidéo',
    description: 'Consultez un médecin en face à face via notre plateforme sécurisée.',
    icon: Video,
  },
  {
    name: 'Sans attente',
    description: "Accédez rapidement à un professionnel de santé, sans file d'attente.",
    icon: Clock,
  },
  {
    name: 'Ordonnance en ligne',
    description: 'Recevez votre ordonnance directement sur votre espace personnel.',
    icon: FileText,
  },
  {
    name: 'Données sécurisées',
    description: 'Vos données médicales sont protégées selon les normes RGPD.',
    icon: Shield,
  },
];

const Features = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-700 font-semibold tracking-wide uppercase">Fonctionnalités</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Une solution complète de télémédecine
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Découvrez tous les avantages de notre plateforme de téléconsultation.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white shadow-lg">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-bold text-gray-800">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;