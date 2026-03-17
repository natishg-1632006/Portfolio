import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ done }) {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center gap-6"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {/* Animated brackets */}
          <div className="flex items-center gap-3">
            <motion.span
              className="text-5xl font-bold text-[#c96f3a] select-none"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              animate={{ rotate: [0, -15, 15, -10, 0], opacity: [1, 0.6, 1] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              &lt;
            </motion.span>

            <motion.span
              className="text-2xl font-semibold text-[#2c2118] select-none"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              /
            </motion.span>

            <motion.span
              className="text-5xl font-bold text-[#c96f3a] select-none"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              animate={{ rotate: [0, 15, -15, 10, 0], opacity: [1, 0.6, 1] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              &gt;
            </motion.span>
          </div>

          {/* Progress bar */}
          <div className="w-48 h-1 bg-[#dfcfbd] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#c96f3a] rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
            />
          </div>

          <p className="text-[#8c7665] text-sm tracking-widest uppercase"
            style={{ fontFamily: 'Inter, sans-serif' }}>
            Loading Portfolio...
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
