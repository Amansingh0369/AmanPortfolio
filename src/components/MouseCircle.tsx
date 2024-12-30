import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const MouseCircle: React.FC = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

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
            className="fixed pointer-events-none w-[40px] h-[40px] bg-transparent border-2 border-white rounded-full"
            style={{
                x: useTransform(x, (value) => value - 15), // Adjust for circle radius
                y: useTransform(y, (value) => value - 15), // Adjust for circle radius
                zIndex: 1000, // Ensure it's on top
            }}
            transition={{
                type: 'spring',
                stiffness: 400, // Controls the speed of the spring
                damping: 30,    // Controls the bounciness of the spring
            }}
        />
    );
};

export default MouseCircle;
