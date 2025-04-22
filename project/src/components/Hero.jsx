import { useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import Login from './Login';

function FloatingSpheres() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Sphere args={[1, 32, 32]} position={[-4, 0, 0]}>
        <meshStandardMaterial color="#646cff" opacity={0.5} transparent />
      </Sphere>
      <Sphere args={[0.5, 32, 32]} position={[4, 2, 0]}>
        <meshStandardMaterial color="#535bf2" opacity={0.3} transparent />
      </Sphere>
      <OrbitControls enableZoom={false} autoRotate />
    </>
  );
}

export default function Hero() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-dark-darker dark:to-dark">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 dark:bg-primary-light/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 dark:bg-primary-light/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-dark-darker dark:text-white mb-6 font-display"
          >
            Preserve Your Legacy with{' '}
            <span className="text-primary dark:text-primary-light">Echoverse</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-dark-darker/80 dark:text-gray-200 mb-12 max-w-2xl mx-auto font-body"
          >
            Create an AI-powered digital legacy that speaks to future generations. 
            Share your stories, wisdom, and memories in an interactive experience.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowLogin(true)}
              className="px-8 py-4 bg-primary hover:bg-primary-dark dark:bg-primary dark:hover:bg-primary-light text-white font-medium rounded-lg shadow-lg transition-all"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white dark:bg-dark-light text-dark-darker dark:text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all border border-light-darker dark:border-dark"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>

      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </section>
  );
}