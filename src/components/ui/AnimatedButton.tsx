import { motion } from 'framer-motion';
import { Button, ButtonProps } from '@/components/ui/button';
import { ReactNode } from 'react';

interface AnimatedButtonProps extends ButtonProps {
  children: ReactNode;
}

const AnimatedButton = ({ children, ...props }: AnimatedButtonProps) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button {...props}>{children}</Button>
    </motion.div>
  );
};

export default AnimatedButton;