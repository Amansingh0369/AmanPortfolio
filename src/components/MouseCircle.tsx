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
            className="fixed pointer-events-none w-[50px] h-[50px] bg-transparent border border-white/50 rounded-full shadow-[0_0_25px_#d4a5ff] backdrop-blur-md mix-blend-difference hidden sm:block"
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
// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// const MouseCircle = () => {
//     const [points, setPoints] = useState<{x: number, y: number}[]>([]);
//     const [currentPoint, setCurrentPoint] = useState({x: 0, y: 0});

//     useEffect(() => {
//         const updatePosition = (event: MouseEvent) => {
//             const newPoint = {x: event.clientX, y: event.clientY};
//             setCurrentPoint(newPoint);
            
//             setPoints(prev => {
//                 // Add new point and keep only last 20 points for smooth trail
//                 const newPoints = [...prev, newPoint];
//                 return newPoints.slice(-20);
//             });
//         };

//         // Smooth curve interpolation
//         const smoothTrail = setInterval(() => {
//             setPoints(prev => {
//                 if (prev.length < 2) return prev;
//                 return prev.map((point, i) => {
//                     if (i === prev.length - 1) return point;
//                     const nextPoint = prev[i + 1];
//                     return {
//                         x: point.x + (nextPoint.x - point.x) * 0.3,
//                         y: point.y + (nextPoint.y - point.y) * 0.3
//                     };
//                 });
//             });
//         }, 16); // 60fps update

//         window.addEventListener('mousemove', updatePosition);

//         return () => {
//             window.removeEventListener('mousemove', updatePosition);
//             clearInterval(smoothTrail);
//         };
//     }, []);

//     const createSmoothPath = (points: {x: number, y: number}[]) => {
//         if (points.length < 2) return '';
        
//         const path = points.reduce((acc, point, i, arr) => {
//             if (i === 0) {
//                 return `M ${point.x} ${point.y}`;
//             }
            
//             if (i < arr.length - 1) {
//                 const next = arr[i + 1];
//                 const xc = (point.x + next.x) / 2;
//                 const yc = (point.y + next.y) / 2;
//                 return `${acc} Q ${point.x} ${point.y}, ${xc} ${yc}`;
//             }
            
//             return `${acc} Q ${point.x} ${point.y}, ${point.x} ${point.y}`;
//         }, '');
        
//         return path;
//     };

//     return (
//         <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 9999 }}>
//             {points.length > 1 && (
//                 <svg className="w-full h-full">
//                     <defs>
//                         <filter id="glow">
//                             <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
//                             <feMerge>
//                                 <feMergeNode in="coloredBlur"/>
//                                 <feMergeNode in="SourceGraphic"/>
//                             </feMerge>
//                         </filter>
//                         <linearGradient id="trail-gradient" x1="0" y1="0" x2="1" y2="0">
//                             <stop offset="0%" stopColor="rgba(255,255,255,0.8)"/>
//                             <stop offset="50%" stopColor="rgba(212,165,255,0.8)"/>
//                             <stop offset="100%" stopColor="rgba(255,255,255,0.8)"/>
//                         </linearGradient>
//                     </defs>
                    
//                     {/* Outer glow effect */}
//                     <motion.path
//                         d={createSmoothPath(points)}
//                         fill="none"
//                         strokeWidth="8"
//                         stroke="rgba(212,165,255,0.2)"
//                         strokeLinecap="round"
//                         filter="url(#glow)"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.1 }}
//                     />
                    
//                     {/* Main trail */}
//                     <motion.path
//                         d={createSmoothPath(points)}
//                         fill="none"
//                         strokeWidth="3"
//                         stroke="url(#trail-gradient)"
//                         strokeLinecap="round"
//                         filter="url(#glow)"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.1 }}
//                     />
                    
//                     {/* Core bright line */}
//                     <motion.path
//                         d={createSmoothPath(points)}
//                         fill="none"
//                         strokeWidth="1"
//                         stroke="rgba(255,255,255,0.9)"
//                         strokeLinecap="round"
//                         filter="url(#glow)"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.1 }}
//                     />
//                 </svg>
//             )}
//         </div>
//     );
// };

// export default MouseCircle;
