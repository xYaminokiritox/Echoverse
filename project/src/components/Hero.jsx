import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

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
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-light to-white dark:from-dark-darker dark:to-dark overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Canvas className="w-full h-full">
          <FloatingSpheres />
        </Canvas>
      </div>
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-bold text-dark-darker dark:text-white mb-6 font-display"
        >
          Preserve Your Legacy
          <span className="block text-primary dark:text-primary-light">Through Digital Echoes</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-dark-darker/80 dark:text-gray-200 mb-8 max-w-2xl mx-auto font-body"
        >
          Create your digital legacy today. Share your stories, memories, and wisdom through our AI-powered digital diary system, ensuring your essence lives on for generations to come.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center space-x-4"
        >
          <button className="bg-primary hover:bg-primary-dark dark:bg-primary dark:hover:bg-primary-light text-white px-8 py-3 rounded-md text-lg font-medium transition-all shadow-md">
            Get Started
          </button>
          <button className="bg-white hover:bg-light dark:bg-dark-light dark:hover:bg-dark text-dark-darker dark:text-white px-8 py-3 rounded-md text-lg font-medium transition-all border border-light-darker dark:border-dark-light shadow-sm">
            Learn More
          </button>
        </motion.div>
      </div>
    </div>
  );
}