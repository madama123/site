
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../../components/Button';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[70vh] flex items-center justify-center px-4"
    >
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-primary">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mt-4">
          Page non trouvée
        </h2>
        <p className="text-gray-600 mt-2 mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Button
          label="Retour à l'accueil"
          onClick={() => navigate('/')}
          primary
          className="px-8 py-3"
        />
      </div>
    </motion.div>
  );
}

export default NotFound