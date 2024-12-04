import React from "react";
import { Vortex } from "../ui/vortex";
import {HyperText} from "@/components/ui/HyperText.tsx";

export function VortexDemo() {
    return (
        <div className="w-full mx-auto rounded-md  h-[30rem] overflow-hidden">
            <Vortex
                backgroundColor="black"
                className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
            >
                <h2 className="text-white text-2xl md:text-6xl  text-center">
                    <HyperText text={"Aman singh"} duration={1000} />
                </h2>
                <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
                    This is chemical burn. It&apos;ll hurt more than you&apos;ve ever been
                    burned and you&apos;ll have a scar.
                </p>
            </Vortex>
        </div>
    );
}
