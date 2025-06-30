import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('');

  // Scroll listener for active link highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(link => document.querySelector(link.href));
      const scrollY = window.scrollY;

      sections.forEach((section, i) => {
        if (section && scrollY >= section.offsetTop - 80) {
          setActive(links[i].name);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center text-white">
        <a href="#hero" className="text-cyan-400 text-xl font-bold hover:text-white transition-all">
          Aryan.dev
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6 font-medium">
          {links.map(link => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`transition-all hover:text-cyan-400 ${
                  active === link.name ? 'text-cyan-400' : ''
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="md:hidden bg-black/90 text-white overflow-hidden"
          >
            <ul className="flex flex-col gap-4 p-4">
              {links.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 text-lg font-medium ${
                      active === link.name ? 'text-cyan-400' : 'hover:text-cyan-400'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
