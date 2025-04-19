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
    <section id="about" className="relative py-20 bg-dark overflow-hidden">
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            At Echoverse, we believe that every life story deserves to be preserved and shared across generations.
            Our mission is to bridge the gap between past and future through innovative AI technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Our Vision",
              description: "To create a world where memories and wisdom can transcend time, allowing meaningful connections between generations."
            },
            {
              title: "Our Technology",
              description: "We combine advanced AI with ethical practices to create authentic digital echoes that preserve the essence of personality."
            },
            {
              title: "Our Promise",
              description: "We commit to handling your memories with utmost respect, ensuring privacy and security in preserving your digital legacy."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="backdrop-blur-lg bg-white/5 p-6 rounded-lg border border-white/10"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 p-8 backdrop-blur-lg bg-white/5 rounded-xl border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white mb-4">The Digital Diary Legacy</h3>
          <p className="text-gray-400">
            Our digital diary system is more than just a journal - it's your legacy in the making. 
            Every entry you make contributes to creating a more authentic and comprehensive digital echo. 
            Through regular journaling, photo sharing, and voice recordings, you're building a bridge to 
            future generations, ensuring your stories, wisdom, and personality live on.
          </p>
        </motion.div>
      </div>
    </section>
  );
}