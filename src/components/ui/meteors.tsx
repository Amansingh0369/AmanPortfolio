"use client";

import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface MeteorsProps {
  number?: number;
}
export const Meteors = ({ number = 100 }: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    [],
  );

  useEffect(() => {
    const maxLeft = window.innerWidth * 0.6;
    const styles = [...new Array(number)].map(() => ({
      top: -5,
      left: Math.floor(Math.random() * maxLeft) + "px",
      animationDelay: Math.random() * 1 + 0.3 + "s",
      animationDuration: Math.floor(Math.random() * 8 + 1) + "s",
    }));
    setMeteorStyles(styles);
  }, [number]);


  return (
      <>
        {[...meteorStyles].map((style, idx) => (
            // Meteor Head
            <span
                key={idx}
                className={cn(
                    "pointer-events-none absolute border hidden md:block left-1/2 top-100 size-0.5 rotate-[215deg] animate-meteor rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
                )}
                style={style}
            >
        {/* Meteor Tail */}
              <div className="pointer-events-none absolute top-1/2 -z-50 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent md:block hidden" />
      </span>
        ))}
      </>
  );
};

export default Meteors;
