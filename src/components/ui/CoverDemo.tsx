import React from "react";
import { Cover } from "@/components/ui/cover";

export function CoverDemo() {
    return (
        <div>
            <h1 className="text-2xl md:text-2xl lg:text-5xl font-semibold max-w-7xl mx-auto text-center mt-0  z-20 py-0 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text relative text-transparent">
                "Mastering Skills to Build Amazing Websites <br /> <Cover>at Warp-Speed Precision"</Cover>
            </h1>
        </div>
    );
}
