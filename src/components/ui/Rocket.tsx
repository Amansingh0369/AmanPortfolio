"use client";
import React, { useEffect, useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { SparklesCore } from "@/components/ui/sparkles";

export const Cover = ({
                          children,
                          className,
                      }: {
    children?: React.ReactNode;
    className?: string;
}) => {
    const [hovered, setHovered] = useState(true);

    const ref = useRef<HTMLDivElement>(null);

    const [containerWidth, setContainerWidth] = useState(0);
    const [beamPositions, setBeamPositions] = useState<number[]>([]);

    useEffect(() => {
        if (ref.current) {
            setContainerWidth(ref.current?.clientWidth ?? 0);

            const height = ref.current?.clientHeight ?? 0;
            const numberOfBeams = Math.floor(height / 0.2); // Adjust the divisor to control the spacing
            const positions = Array.from(
                { length: numberOfBeams },
                (_, i) => (i + 1) * (height / (numberOfBeams + 1))
            );
            setBeamPositions(positions);
        }
    }, [ref.current]);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(true)}
            ref={ref}
            className="relative   group/cover inline-block dark:bg-neutral-900  px-2 py-2  transition duration-300 rounded-sm"
        >
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 1 }}
                        transition={{
                            opacity: {
                                duration: 0.2,
                            },
                        }}
                        className="h-full w-full overflow-hidden absolute inset-0"
                    >
                        <motion.div
                            animate={{
                                translateX: ["-50%", "0%"],
                            }}
                            transition={{
                                translateX: {
                                    duration: 20,
                                    ease: "linear",
                                    repeat: Infinity,
                                },
                            }}
                            className="w-[200%] h-full flex"
                        >
                            <SparklesCore
                                background="transparent"
                                minSize={0.4}
                                maxSize={1}
                                particleDensity={500}
                                className="w-full h-full"
                                particleColor="#FFFFFF"
                            />
                            <SparklesCore
                                background="transparent"
                                minSize={0.4}
                                maxSize={1}
                                particleDensity={500}
                                className="w-full h-full"
                                particleColor="#FFFFFF"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            {beamPositions.map((position, index) => (
                <Beam
                    key={index}
                    hovered={hovered}
                    duration={Math.random() * 10 + 1}
                    delay={Math.random() * 1 + 1}
                    width={containerWidth}
                    style={{
                        top: `${position}px`,
                    }}
                />
            ))}
            <motion.span
                key={String(hovered)}
                animate={{
                    scale: hovered ? 0.8 : 1,
                    x: hovered ? [0, -30, 30, -30, 30, 0] : 0,
                    y: hovered ? [0, 30, -30, 30, -30, 0] : 0,
                }}
                exit={{
                    filter: "none",
                    scale: 1,
                    x: 0,
                    y: 0,
                }}
                transition={{
                    duration: 0.2,
                    x: {
                        duration: 0.2,
                        repeat: Infinity,
                        repeatType: "loop",
                    },
                    y: {
                        duration: 0.2,
                        repeat: Infinity,
                        repeatType: "loop",
                    },
                    scale: {
                        duration: 0.2,
                    },
                    filter: {
                        duration: 0.2,
                    },
                }}
                className={cn(
                    "dark:text-white w-[10em] inline-block text-neutral-100 relative z-20 group-hover/cover:text-white transition duration-200",
                    className
                )}
            >

            </motion.span>
        </div>
    );
};

export const Beam = ({
                         className,
                         delay,
                         duration,
                         hovered,
                         width = 200,
                         ...svgProps
                     }: {
    className?: string;
    delay?: number;
    duration?: number;
    hovered?: boolean;
    width?: number;
} & React.ComponentProps<typeof motion.svg>) => {
    const id = useId();

    return (
        <motion.svg
            width={width ?? "600"}
            height="10"
            viewBox={`0 0 ${width ?? "600"} 1`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("absolute inset-x-0 w-full", className)}
            {...svgProps}
        >
            <motion.path
                d={`M0 0.5H${width ?? "600"}`}
                stroke={`url(#svgGradient-${id})`}
            />

            <defs>
                <motion.linearGradient
                    id={`svgGradient-${id}`}
                    key={String(hovered)}
                    gradientUnits="userSpaceOnUse"
                    initial={{
                        x1: "0%",
                        x2: "0%",
                        y1: "0%",
                        y2: "0%",
                    }}
                    animate={{
                        x1: "100%",
                        x2: "200%",
                        y1: "0%",
                        y2: "0%",
                    }}
                    transition={{
                        duration: hovered ? 0.5 : 2,
                        ease: "linear",
                        repeat: Infinity,
                        delay: hovered ? Math.random() * (1 - 0.2) + 0.2 : 0,
                        repeatDelay: hovered ? Math.random() * (2 - 1) + 1 : 1,
                    }}
                >
                    {/* Gradient Color Stops */}
                    <stop
                        stopColor={hovered ? "#FFffff" : "#2EB9DF"}
                        stopOpacity="0"
                    /> {/* Orange-red when hovered, light blue otherwise */}

                    <stop
                        offset="50%"
                        stopColor={hovered ? "white" : "white"}
                        stopOpacity="1"
                    /> {/* Yellow in the middle when hovered, white otherwise */}

                    <stop
                        offset="100%"
                        stopColor={hovered ? "#3b82f6" : "#3b82f6"}
                        stopOpacity="0"
                    /> {/* Tomato red when hovered, blue otherwise */}
                </motion.linearGradient>



            </defs>
        </motion.svg>
    );
};

export const CircleIcon = ({
                               className,
                               delay,
                           }: {
    className?: string;
    delay?: number;
}) => {
    return (
        <div
            className={cn(
                `pointer-events-none animate-pulse group-hover/cover:hidden group-hover/cover:opacity-0 group h-2 w-2 rounded-full bg-neutral-600 opacity-100 group-hover/cover:bg-white`,
                className
            )}
        ></div>
    );
};
