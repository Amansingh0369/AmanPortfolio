import React, { useState } from "react";
import Spline from "@splinetool/react-spline";
import statusToggle from "@/components/StatusToggle.tsx";

const SplineWithLoading = () => {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoad = () => {
        setIsLoading(false); // Hide loading when the Spline scene has loaded
    };

    return (
        <div className="relative rounded-2xl  ">
            <div className="relative h-[22rem] w-[38.5rem] mt-10  select-none z-100">
                {/* Loading Indicator */}
                {isLoading && (
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
                )}

                {/* Spline Scene */}
                <Spline
                    scene="https://prod.spline.design/mDTVNpf6EzDIavDQ/scene.splinecode"
                    onLoad={handleLoad} // Set loading state to false once loaded
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
