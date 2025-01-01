import  { useState } from "react";
import Spline from "@splinetool/react-spline";
import statusToggle from "@/components/StatusToggle.tsx";

const SplineWithLoading = () => {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoad = () => {
        // Add a small delay before hiding the loading state
        setTimeout(() => {
            setIsLoading(false);
        }, 100);
    };

    return (
        <div className="relative rounded-2xl  ">
            <div className="relative h-[22rem] w-[38.5rem] mt-10  select-none z-100">
                {/* Loading Indicator */}
                <div className={`absolute w-full transition-opacity duration-300 ${
                    isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}>
                    <div className="flex flex-col ml-6 items-center justify-center h-fit w-full bg-black rounded-2xl">
                        {/* Head */}
                        <div className="bg-gray-700 w-48 h-28  mt-0  rounded-2xl animate-pulse mb-1"></div>
                        <div className="flex flex-row justify-center  w-full text-center pl-16">
                            <p className="text-gray-400 animate-pulse mt-8">"Hold on"</p>
                            {/* Body */}
                            <div className="bg-gray-700 w-24 h-20 rounded-lg animate-pulse mb-2 ml-16"></div>
                            <p className="text-gray-400 animate-pulse mt-8 ml-16">"i m getting ready.."</p>
                        </div>
                        {/* Legs */}
                        <div className="flex space-x-4">
                            <div className="bg-gray-700 w-6 h-8 rounded-lg animate-pulse"></div>
                            <div className="bg-gray-700 w-6 h-8 rounded-lg animate-pulse"></div>
                        </div>
                        {/* Loading Message */}

                    </div>
                </div>

                {/* Spline Scene */}
                <Spline
                    scene="https://prod.spline.design/mDTVNpf6EzDIavDQ/scene.splinecode"
                    onLoad={handleLoad}
                />

                {/* Optional Overlay Content */}
                <div
                    className="absolute bottom-4 right-4 w-36 h-10 flex items-center justify-center bg-black text-black z-10"
                    style={{ zIndex: 10 }}
                >
                    <button onClick={statusToggle}>
                        on
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SplineWithLoading;
