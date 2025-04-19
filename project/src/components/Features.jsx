import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-darker dark:text-white mb-4 font-display">Digital Legacy System</h2>
          <p className="text-dark-darker/80 dark:text-gray-200 max-w-2xl mx-auto font-body">
            Create your digital legacy through our innovative diary system and AI technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
                className="bg-light dark:bg-dark-light backdrop-blur-sm p-8 rounded-lg border border-light-darker dark:border-dark shadow-sm hover:shadow-md transition-shadow h-full"
              >
                <h3 className="text-xl font-semibold text-dark-darker dark:text-white mb-4 font-display">{feature.title}</h3>
                <p className="text-dark-darker/80 dark:text-gray-200 font-body">{feature.description}</p>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}