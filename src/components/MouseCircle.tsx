import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const MouseCircle = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    // Add spring physics for smoother movement
    const springConfig = { damping: 20, stiffness: 150, mass: 0.3 };
    const smoothX = useSpring(x, springConfig);
    const smoothY = useSpring(y, springConfig);

    useEffect(() => {
        const updatePosition = (event: MouseEvent) => {
            x.set(event.clientX);
            y.set(event.clientY);
        };

        window.addEventListener('mousemove', updatePosition);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
        };
    }, [x, y]);

    return (
        <motion.div
            className="fixed pointer-events-none w-[50px] h-[50px] bg-transparent border border-white/50 rounded-full shadow-[0_0_25px_#d4a5ff] backdrop-blur-md mix-blend-difference"
            style={{
                x: useTransform(smoothX, (value) => value - 15),
                y: useTransform(smoothY, (value) => value - 15),
                zIndex: 1000,
                background: 'linear-gradient(45deg, #d4a5ff 0%, #e8ccff 100%)',
                boxShadow: '0 0 30px #d4a5ff, inset 0 0 20px rgba(255,255,255,0.7)',
                mixBlendMode: 'difference'
            }}
            animate={{
                scale: [1, 1.02, 1],
            }}
            transition={{
                type: "tween",
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        />
    );
};

export default MouseCircle;
