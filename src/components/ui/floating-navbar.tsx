"use client";
import  {useRef, useState} from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent, useMotionValue, MotionValue, useTransform, useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";
import {IconLayoutNavbarCollapse} from "@tabler/icons-react";
export const FloatingNav = ({
                              items,
                              desktopClassName,
                              mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
            "flex sm:w-0  h-14 fixed pr-2 pl-8 py-2 items-center justify-start sm:justify-center space-x-20 top-[1rem] text-center  inset-x-2 mx-auto border border-transparent border-white/[0.2] rounded-full bg-black backdrop-blur-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000]  border-neutral-800",

        )}
      >
        <FloatingDockDesktop items={items} className={desktopClassName} />
        <FloatingDockMobile items={items} className={mobileClassName} />
      </motion.div>
    </AnimatePresence>
  );
};

const FloatingDockDesktop = ({
                               items,
                               className,
                             }: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  let mouseX = useMotionValue(Infinity);
  return (
      <motion.div
          onMouseMove={(e) => mouseX.set(e.pageX)}
          onMouseLeave={() => mouseX.set(Infinity)}
          className={cn(
              "mx-auto hidden md:flex h-16  gap-10 items-end border border-white/[0.2]  rounded-full bg-black px-4 pb-3",
              className
          )}
      >

        {items.map((item) => (
            <IconContainer mouseX={mouseX} key={item.title} {...item} />
        ))}
      </motion.div>
  );
};

function IconContainer({
                           mouseX,
                           title,
                           icon,
                           href,
                       }: {
    mouseX: MotionValue;
    title: string;
    icon: React.ReactNode;
    href: string;
}) {
    let ref = useRef<HTMLDivElement>(null);

    let distance = useTransform(mouseX, (val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

        return val - bounds.x - bounds.width / 2;
    });

    let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

    let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
    let heightTransformIcon = useTransform(
        distance,
        [-150, 0, 150],
        [20, 40, 20]
    );

    let width = useSpring(widthTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    let height = useSpring(heightTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    let widthIcon = useSpring(widthTransformIcon, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    let heightIcon = useSpring(heightTransformIcon, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    const [hovered, setHovered] = useState(false);

    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <motion.div
                ref={ref}
                style={{ width, height }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="aspect-square rounded-full bg-neutral-900 flex items-center justify-center relative"
                animate={{
                    y: hovered ? 30 : 0, // Moves downwards by 10px on hover
                }}
                transition={{
                    duration: 0.2, // Smooth transition
                }}
            >
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0, y: -30, x: "-50%" }}
                            animate={{ opacity: 1, y: 0, x: "-50%" }}
                            exit={{ opacity: 0, y: -2, x: "-50%" }}
                            className="px-2 py-0.5 whitespace-pre rounded-md border bg-neutral-800 text-white absolute left-1/2 -translate-x-1/2 -bottom-10 w-fit text-sm border-neutral-800"
                        >
                            {title}
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.div
                    style={{ width: widthIcon, height: heightIcon }}
                    className="flex items-center justify-center"
                >
                    {icon}
                </motion.div>
            </motion.div>
        </a>
    );
}

const FloatingDockMobile = ({
                              items,
                              className,
                            }: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
      <div className={cn("relative block md:hidden", className)}>
        <AnimatePresence>
          {open && (
              <motion.div
                  layoutId="nav"
                  className="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2"
              >
                {items.map((item, idx) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: 10,
                          transition: {
                            delay: idx * 0.05,
                          },
                        }}
                        transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                    >
                      <a
                          href={item.href}

                          key={item.title}
                          className="h-10 w-10 rounded-full bg-neutral-900 flex items-center justify-center"
                      >
                        <div className="h-4 w-4">{item.icon}</div>
                      </a>
                    </motion.div>
                ))}
              </motion.div>
          )}
        </AnimatePresence>
        <button
            onClick={() => setOpen(!open)}
            className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center"
        >
          <IconLayoutNavbarCollapse className="h-5 w-5   text-neutral-100" />
        </button>
      </div>
  );
};



