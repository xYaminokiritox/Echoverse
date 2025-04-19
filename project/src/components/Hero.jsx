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
    <div id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-dark to-black overflow-hidden">
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
          className="text-4xl sm:text-6xl font-bold text-white mb-6"
        >
          Preserve Your Legacy
          <span className="block text-primary">Through Digital Echoes</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Create your digital legacy today. Share your stories, memories, and wisdom through our AI-powered digital diary system, ensuring your essence lives on for generations to come.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          <button className="bg-primary hover:bg-secondary text-white text-lg px-8 py-4 rounded-full font-medium transition-all backdrop-blur-lg">
            Start Your Digital Diary
          </button>
          <button className="bg-white/10 hover:bg-white/20 text-white text-lg px-8 py-4 rounded-full font-medium transition-all backdrop-blur-lg border border-white/30">
            Learn More
          </button>
        </motion.div>
      </div>
    </div>
  );
}