import { motion } from 'framer-motion';

export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const MotionDiv = ({ children, delay = 0 }) => (
  <motion.div
    variants={fadeIn}
    initial="hidden"
    animate="visible"
    transition={{ delay }}
    style={{ width: '100%' }}
  >
    {children}
  </motion.div>
);