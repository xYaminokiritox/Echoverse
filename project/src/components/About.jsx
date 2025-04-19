import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

function Background() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      {Array.from({ length: 50 }).map((_, i) => (
        <Sphere
          key={i}
          args={[0.1, 16, 16]}
          position={[
            Math.random() * 20 - 10,
            Math.random() * 20 - 10,
            Math.random() * 20 - 10
          ]}
        >
          <meshStandardMaterial
            color="#646cff"
            opacity={0.2}
            transparent
          />
        </Sphere>
      ))}
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-light dark:bg-dark-darker overflow-hidden">
      <div className="absolute inset-0">
        <Canvas>
          <Background />
        </Canvas>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-darker dark:text-white mb-4 font-display">Our Mission</h2>
          <p className="text-dark-darker/80 dark:text-gray-200 max-w-2xl mx-auto font-body">
            At Echoverse, we believe that every life story deserves to be preserved and shared across generations.
            Our mission is to bridge the gap between past and future through innovative AI technology.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "AI-Powered Preservation",
              description: "Our advanced AI technology ensures your memories are preserved in their most authentic form."
            },
            {
              title: "Interactive Experience",
              description: "Create an immersive digital legacy that future generations can interact with and learn from."
            },
            {
              title: "Secure & Private",
              description: "Your digital legacy is protected with state-of-the-art security measures and privacy controls."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-dark-light backdrop-blur-sm p-6 rounded-lg border border-light-darker dark:border-dark shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-dark-darker dark:text-white mb-3 font-display">{feature.title}</h3>
              <p className="text-dark-darker/80 dark:text-gray-200 font-body">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}