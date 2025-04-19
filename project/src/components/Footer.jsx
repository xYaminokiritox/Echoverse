import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-dark py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-2xl font-bold text-white mb-4"
            >
              Echoverse
            </motion.h3>
            <p className="text-gray-400">
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
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Echoverse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}