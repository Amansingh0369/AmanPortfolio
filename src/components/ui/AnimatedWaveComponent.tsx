"use client";

import { motion } from "framer-motion";
import React from "react";
import Particles from "./Particles"; // Assuming the Particles component is in the same directory

const LightningComponent: React.FC = () => {
    return (
        <div className="relative w-full h-32 overflow-hidden">
            {/* Left particles moving from 0% to 40% of the screen */}
            <div className="absolute inset-0 w-1/3">
                <Particles
                    className="absolute inset-0"
                    quantity={1000}
                    staticity={1000}
                    ease={300}
                    size={0.5}
                    color="#1D3C6A"
                    vx={2}  // Horizontal speed to move particles from left to right
                    vy={0.1}  // Vertical speed
                    style={{
                        left: 20,   // Start from the left edge of the screen
                        width: '60%', // Move till 40% of the screen width
                        top: 0,       // Align particles to the top
                    }}
                />
            </div>

            {/* Centered "hello" div */}
            <div className="relative z-10 text-white text-xl bg-black w-max px-4 py-2 mx-auto">
                hello
            </div>

            {/* Right particles moving from 60% to 100% of the screen */}
            <div className=" w-1/3">
                <Particles
                    className="absolute inset-0"
                    quantity={1000}
                    staticity={1000}
                    ease={300}
                    size={0.5}
                    color="#1D3C6A"
                    vx={-2}  // Horizontal speed to move particles from right to left
                    vy={0.1}  // Vertical speed
                    style={{
                        left: '10%',  // Start from 60% of the screen width
                        width: '40%', // Move till 100% of the screen width
                        top: 0,       // Align particles to the top
                    }}
                />
            </div>
        </div>
    );
};

export default LightningComponent;
