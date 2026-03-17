import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const links = ['Home', 'About', 'Achievements', 'Skills', 'Projects', 'Certificates', 'Resume', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 bg-[#fffaf2]/95 backdrop-blur-sm border-b border-[#dfcfbd] transition-shadow duration-300 ${scrolled ? 'shadow-[0_12px_30px_rgba(44,33,24,0.08)]' : ''}`}
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-[70px] flex items-center justify-between">
        <span
          className="text-xl font-bold text-[#c96f3a] cursor-pointer"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          onClick={() => scrollTo('home')}
        >
          Natish
        </span>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l}>
              <button
                onClick={() => scrollTo(l)}
                className="text-[#6d5a4c] hover:text-[#c96f3a] font-medium transition-colors duration-200 text-sm relative group"
              >
                {l}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c96f3a] group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button className="md:hidden text-[#2c2118] p-1" onClick={() => setOpen(!open)}>
          {open ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#fffaf2] border-t border-[#dfcfbd] px-6 py-5 flex flex-col gap-4 shadow-lg">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-left text-[#6d5a4c] hover:text-[#c96f3a] font-medium transition-colors py-1"
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </motion.nav>
  );
}
