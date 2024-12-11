import React from "react";
import { Cover } from "@/components/ui/cover";

export function CoverDemo() {
    return (
        <div>
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold max-w-7xl mx-auto text-center mt-6  z-20 py-6 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text relative text-transparent">
                "Mastering Skills to Build Amazing Websites <br /> <Cover>at Warp-Speed Precision"</Cover>
            </h1>
        </div>
    );
}
