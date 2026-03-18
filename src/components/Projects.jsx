import { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaGithub, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'Built a complete e-commerce system with separate admin and user access, including an admin panel for product management and dynamic filter control. Designed a responsive UI for a smooth user experience and scalable performance.',
    tech: ['MERN', 'Tailwind CSS'],
    github: 'https://github.com/natishg-1632006',
    status: 'Completed',
  },
  {
    title: 'Poultry Management System',
    description:
      'Developed a poultry management system with daily farm data entry, dashboards, and automatic FCR (Feed Conversion Ratio) calculation. Added chart visualization, secure authentication, data validation, and optimized MongoDB storage.',
    tech: ['MERN', 'Chart Analytics', 'Tailwind CSS'],
    github: 'https://github.com/natishg-1632006/PoultryFarm',
    status: 'Completed',
  },
  {
    title: 'Food Waste Management System',
    description:
      'Developed a web application connecting restaurants with NGOs to donate leftover food. Implemented user roles, location-based food listing, expiry timers, request tracking, real-time notifications, and a responsive UI for organized food donation.',
    tech: ['MERN', 'Tailwind CSS'],
    github: 'https://github.com/natishg-1632006/Food-Waste-Management-System',
    status: 'Completed',
  },
  {
    title: 'Faculty Pedagogical Effectiveness Dashboard',
    description:
      'Built a dashboard to analyze and visualize faculty pedagogical effectiveness using performance metrics, feedback trends, and interactive reports. Designed clear data views to support academic decision-making and continuous teaching improvement.',
    tech: ['MERN', 'Chart Analytics','Tailwind CSS'],
    github: 'https://github.com/natishg-1632006',
    status: 'In Progress',
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const scrollContainerRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(1);

  const extendedProjects = Array(40).fill(projects).flat();

  const updateCenterIndex = () => {
    if (!scrollContainerRef.current || scrollContainerRef.current.children.length === 0) return;
    const container = scrollContainerRef.current;
    const itemOffsetWidth = container.children[0].offsetWidth;
    const itemWidth = itemOffsetWidth + 24; // 24px is gap-6
    const scrollCenter = container.scrollLeft + container.clientWidth / 2;
    setCenterIndex(Math.round((scrollCenter - itemOffsetWidth / 2) / itemWidth));
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current && scrollContainerRef.current.children.length > 0) {
      const container = scrollContainerRef.current;
      const itemWidth = container.children[0].offsetWidth + 24;
      container.scrollBy({ left: direction === 'left' ? -itemWidth : itemWidth, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (!activeProject) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveProject(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProject]);

  useEffect(() => {
    if (scrollContainerRef.current && scrollContainerRef.current.children.length > 0) {
      const container = scrollContainerRef.current;
      const itemOffsetWidth = container.children[0].offsetWidth;
      const itemWidth = itemOffsetWidth + 24;
      
      const middleIndex = 20 * projects.length; 
      container.scrollLeft = middleIndex * itemWidth + itemOffsetWidth / 2 - container.clientWidth / 2;
      updateCenterIndex();
    }

    const timeout = setTimeout(() => updateCenterIndex(), 100);
    window.addEventListener('resize', updateCenterIndex);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', updateCenterIndex);
    };
  }, []);

  return (
    <section id="projects" className="py-20 bg-[#f3e8db]">
      <div className="max-w-[1200px] mx-auto px-6">

        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2c2118] mb-3"
            style={{ fontFamily: 'Poppins, sans-serif' }}>Projects</h2>
          <div className="w-14 h-1 bg-[#c96f3a] mx-auto rounded-full" />
          <p className="text-[#7b6757] mt-4 text-sm">Selected work and case studies</p>
        </motion.div>

        <div className="relative group">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#fffaf2]/90 border border-[#dfcfbd] text-[#c96f3a] opacity-0 shadow-[0_8px_20px_rgba(117,77,53,0.15)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[#f2dfcf] group-hover:opacity-100 hidden md:flex"
            aria-label="Scroll left"
          >
            <FaChevronLeft size={18} />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#fffaf2]/90 border border-[#dfcfbd] text-[#c96f3a] opacity-0 shadow-[0_8px_20px_rgba(117,77,53,0.15)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[#f2dfcf] group-hover:opacity-100 hidden md:flex"
            aria-label="Scroll right"
          >
            <FaChevronRight size={18} />
          </button>

          <div className="overflow-hidden py-8">
            <style>{`
              .hide-scroll::-webkit-scrollbar { display: none; }
            `}</style>
            <div
              ref={scrollContainerRef}
              onScroll={updateCenterIndex}
              className="hide-scroll flex w-full gap-6 overflow-x-auto snap-x snap-mandatory px-0"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {extendedProjects.map((p, index) => (
                <motion.div
                  key={`${p.title}-${index}`}
                  animate={{
                    scale: index === centerIndex ? 1.05 : 0.95,
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="snap-center shrink-0 w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] h-[420px] sm:h-[430px]"
                >
                  <ProjectCard {...p} onOpen={() => setActiveProject(p)} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-[70] bg-[#2c2118]/65 px-4 py-8 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="relative w-full max-w-2xl bg-[#fffaf2] rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(44,33,24,0.24)]"
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 24 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 text-[#2c2118] hover:bg-[#f5e8da] transition-colors flex items-center justify-center"
                aria-label="Close project details"
              >
                <FaTimes />
              </button>

              <div className="p-8 md:p-10">
                <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#c96f3a] mb-3">
                  Project Details
                </p>
                <h3
                  className="text-2xl md:text-3xl font-bold text-[#2c2118] mb-4"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {activeProject.title}
                </h3>
                {activeProject.status && (
                  <div className="mb-5">
                    <span className="bg-[#ead3bf] text-[#8f4d28] text-xs font-semibold px-3 py-1 rounded-full">
                      {activeProject.status}
                    </span>
                  </div>
                )}
                <p className="text-[#6d5a4c] leading-relaxed mb-6 line-clamp-4">
                  {activeProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {activeProject.tech.map((item) => (
                    <span
                      key={item}
                      className="inline-flex h-6 items-center rounded-full bg-[#f2dfcf] px-3 text-[12px] font-medium text-[#a7542a]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 border border-[#dfcfbd] hover:border-[#c96f3a] text-[#6d5a4c] hover:text-[#c96f3a] px-5 py-3 rounded-lg text-sm font-medium transition-colors duration-200"
                  >
                    <FaGithub /> View Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
