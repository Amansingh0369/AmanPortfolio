"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";

export function Profileimage() {
    return (
        <div className="h-[20rem] w-[20rem] flex items-center justify-center p-1 rounded-2xl ">
            <PinContainer
                title="Aman Github"
                href="https://github.com/Amansingh0369"
            >
                <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[19.5rem] rounded-2xl ">
                    {/*<div className="flex flex-1 w-full rounded-lg mt-4 bg-black">*/}
                        <img src="src/assets/images/profilepic.png" className=" rounded-2xl"/>
                    {/*</div>*/}
                </div>
            </PinContainer>
        </div>
    );
}
