import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCheckCircle, HiXCircle, HiInformationCircle } from 'react-icons/hi';
import './Toast.css';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onDismiss: () => void;
}

const icons = {
  success: <HiCheckCircle size={22} />,
  error: <HiXCircle size={22} />,
  info: <HiInformationCircle size={22} />,
};

export default function Toast({ message, type, onDismiss }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onDismiss, 4000);
    return () => clearTimeout(timer);
  }, [onDismiss]);

  return (
    <AnimatePresence>
      <motion.div
        className={`toast toast-${type}`}
        initial={{ opacity: 0, x: 100, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 100, scale: 0.9 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <span className="toast-icon">{icons[type]}</span>
        <span className="toast-message">{message}</span>
        <button className="toast-close" onClick={onDismiss}>&times;</button>
      </motion.div>
    </AnimatePresence>
  );
}
