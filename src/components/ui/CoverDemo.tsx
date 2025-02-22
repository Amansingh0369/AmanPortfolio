import { Cover } from "@/components/ui/cover";
import LampDemo from "@/components/ui/lamp.tsx";

export function CoverDemo() {
    return (
        <div className="shadow-lg"
        >
            <h1 className="text-2xl md:text-2xl lg:text-5xl font-semibold max-w-7xl mx-auto text-center mt-0 z-20 py-0 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text relative text-transparent">
                Mastering Skills to Build Amazing Websites <br /> <Cover className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">at Warp-Speed Precision</Cover>
            </h1>
            <div className="hidden sm:block">
                <LampDemo />
            </div>
        </div>
    );
}