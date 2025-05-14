import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GradientCardProps {
  children: ReactNode;
  className?: string;
}

export function GradientCard({ children, className }: GradientCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        transition: {
          duration: 0.3,
          ease: 'easeInOut',
        },
      }}
      className={cn(
        'relative overflow-hidden rounded-lg bg-card p-6 transition-all duration-300',
        'hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]',
        'before:absolute before:inset-0 before:bg-[length:400%_400%] before:bg-gradient-to-r before:from-[#FF6B6B] before:via-[#4ECDC4] before:to-[#45B7D1] before:opacity-0 before:transition-all before:duration-300 before:animate-gradient before:blur-xl hover:before:opacity-10',
        'after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-r after:from-[#FF6B6B]/10 after:via-[#4ECDC4]/10 after:to-[#45B7D1]/10 after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100',
        className
      )}
    >
      <motion.div
        className="relative z-10"
        initial={false}
        whileHover={{
          y: -2,
          transition: { duration: 0.3 },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}