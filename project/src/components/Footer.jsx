import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-light dark:bg-dark-darker py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-2xl font-bold text-dark-darker dark:text-white mb-4 font-display"
            >
              Echoverse
            </motion.h3>
            <p className="text-dark-darker/80 dark:text-gray-200 font-body">
              Preserving memories and connections through AI technology.
            </p>
          </div>
          
          {[
            {
              title: "Company",
              links: ["About", "Features", "Contact"]
            },
            {
              title: "Legal",
              links: ["Privacy", "Terms", "Security"]
            },
            {
              title: "Support",
              links: ["Help Center", "FAQ", "Contact"]
            }
          ].map((section, index) => (
            <div key={index}>
              <h4 className="text-dark-darker dark:text-white font-semibold mb-4 font-display">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-dark-darker/70 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors font-body">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-light-darker dark:border-dark">
          <p className="text-center text-dark-darker/70 dark:text-gray-300 font-body">
            © {new Date().getFullYear()} Echoverse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}