import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaFileAlt } from 'react-icons/fa';

type IconProps = {
    mouseX: any; // Can be more specific if `useMotionValue` has a defined type
    title: string;
    icon: React.ReactNode;
    href: string;
};

const Footer = () => {
    const icons = [
        { title: 'Contact me via Email', icon: <FaEnvelope />, href: 'mailto:singh0369aman@gmail.com' },
        { title: "Let's Connect", icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/aman-singh-01663b231/' },
        { title: 'Check out my GitHub', icon: <FaGithub />, href: 'https://github.com/Amansingh0369' },
        { title: 'Twitter', icon: <FaTwitter />, href: 'https://x.com/singh0369aman/' },
        { title: 'Check out Resume', icon: <FaFileAlt />, href: 'https://drive.google.com/file/d/1D26WgGSi3xGFPN0qmXqUZkbjSdd2vow6/view' },
    ];

    let mouseX = useMotionValue(Infinity);

    return (
        <footer className="pt-10 z-100 px-6 sm:p-8 bg-black text-white border-t border-gray-600">
            <div className="container mx-auto flex flex-col md:flex-row justify-around items-center">
                <div className="absolute sm:left-[66rem] sm:bottom-8 ">
                    <motion.div
                        onMouseMove={(e) => mouseX.set(e.pageX)}
                        onMouseLeave={() => mouseX.set(Infinity)}
                        className="flex space-x-6"
                    >
                        {icons.map((item) => (
                            <IconWithTooltip key={item.title} mouseX={mouseX} {...item} />
                        ))}
                    </motion.div>
                </div>
            </div>
            <div className="mt-8 sm:ml-20 sm:mt-2 text-center sm:text-start md:mb-0">
        <span className="italic justify-center sm:justify-start relative text-neutral-400 text-lg text-center">
          "Code is like humor. When you have to explain it, it’s bad."
        </span>
            </div>
        </footer>
    );
};

const IconWithTooltip: React.FC<IconProps> = ({ mouseX, title, icon, href }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [hovered, setHovered] = useState(false);

    const distance = useTransform(mouseX, (val:number) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const sizeTransform = useTransform(distance, [-150, 0, 150], [35, 50, 35]);
    const size = useSpring(sizeTransform, { mass: 0.2, stiffness: 150, damping: 12 });

    return (
        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={title}>
            <motion.div
                ref={ref}
                style={{ width: size, height: size }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="flex items-center justify-center relative"
            >
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: -10 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute bottom-full mb-2 px-2 py-2 bg-neutral-700 w-40 justify-center text-center text-white text-sm rounded"
                        >
                            {title}
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.div
                    style={{ width: size, height: size }}
                    className="flex items-center justify-center text-2xl"
                >
                    {icon}
                </motion.div>
            </motion.div>
        </a>
    );
};

export default Footer;
