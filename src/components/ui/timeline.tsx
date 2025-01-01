"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button.tsx";
import {ArrowRight} from "lucide-react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  link:string;
  gitHubLink:string,
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-black font-sans md:px-10"
      ref={containerRef}
    >

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-10 md:gap-10"
          >
            <div className="sticky flex flex-col sm:flex-col z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-800 border   border-neutral-100 p-2 " />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-300">
                {item.title}

              </h3>
              {item.title !== "Course Selling App" && (
                  <div className="mt-10 sm:flex hidden sm:block w-full flex-row">
                    <div className="border-t  h-1 w-10 mt-5 ml-8.5 p-1"></div>
                    <div
                        className="md:pl-0 flex flex-row"
                        onClick={() => {
                          window.location.href = item.link; // Dynamically use item.link
                        }}
                    >
                      <InteractiveHoverButton text={"Live Demo"} className="relative justify-center" />
                    </div>
                  </div>
              )}

              <div className=" mt-10 sm:flex hidden sm:block w-full  flex-row ">
                <div className="border-t border-blue-500-500 m h-1 w-10 mt-5 ml-8.5 p-1 ">
                </div>
                <div
                    className="md:pl-0 flex flex-row"
                    onClick={() => {
                      window.location.href = item.gitHubLink; // Dynamically use item.link
                    }}
                >
                  <InteractiveHoverButton text={"GitHub"} className="relative justify-start text-start px-6" />
                </div>
              </div>
            </div>

            <div className="relative pl-14 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-3xl mb-4 text-left font-bold  text-neutral-300">
                {item.title}
              </h3>
              {item.content}{""}
              <div className="justify-end flex sm:hidden">
                <p className="mt-2 px-4 flex items-center text-neutral-300">
                  Scroll left
                  <ArrowRight className="ml-2 text-xs p-1" />
                </p>
              </div>

              <div className="block sm:hidden justify-center flex flex-row mt-6">
                {item.title !== "Course Selling App" && (
                <div
                    className="md:pl-0 flex flex-row"
                    onClick={() => {
                      window.location.href = item.link; // Dynamically use item.link
                    }}
                >
                  <InteractiveHoverButton text={"Live Demo"} className="relative justify-center" />
                </div>
                )}
                <div
                    className="md:pl-0 flex flex-row"
                    onClick={() => {
                      window.location.href = item.gitHubLink; // Dynamically use item.link
                    }}
                >
                  <InteractiveHoverButton text={"GitHub"} className="relative justify-start text-start px-6" />
                </div>

              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="relative inset-x-0 top-0  w-[3px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
