import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

export default function Features() {
  return (
    <section id="features" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Digital Legacy System</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Create your digital legacy through our innovative diary system and AI technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              title: "Digital Diary System",
              description: "Record your daily thoughts, memories, and experiences in our secure digital diary. Share stories, upload photos, and preserve your personality."
            },
            {
              title: "Legacy Creation",
              description: "Your diary entries are securely stored and processed to create your digital echo, preserving your essence for future generations."
            },
            {
              title: "Memory Preservation",
              description: "Advanced AI algorithms analyze your diary entries, photos, and voice recordings to create an authentic digital representation."
            },
            {
              title: "Future Connection",
              description: "Enable your loved ones to maintain a meaningful connection with your digital echo, sharing wisdom and memories across generations."
            }
          ].map((feature, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative p-8 bg-gradient-to-br from-primary/10 to-transparent rounded-xl border border-primary/20 backdrop-blur-lg shadow-[0_0_15px_rgba(100,108,255,0.3)]"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-10 group-hover:opacity-20 transition duration-300"></div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}