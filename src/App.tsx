import { useState } from 'react'
import reactLogo from './assets/images/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css';
import {HyperText} from "@/components/ui/HyperText.tsx";
import BlurIn from "@/components/ui/blur-in.tsx";
import Ripple from "@/components/ui/ripple.tsx";
import FlickeringGrid from "@/components/ui/flickering-grid.tsx";
import {Vortex} from "@/components/ui/vortex.tsx";
import {VortexDemo} from "@/components/ui/VortexDemo.tsx";
import {GoogleGeminiEffect} from "@/components/ui/google-gemini-effect.tsx";
import {GoogleGeminiEffectDemo} from "@/components/ui/Skills.tsx";
import {AnimatedBeamDemo} from "@/components/ui/AnimatedBeamDemo.tsx";
import {HeroParallaxDemo} from "@/components/ui/HeroParallaxDemo.tsx";
import {HeroHighlightDemo} from "@/components/ui/HeroHighlightDemo.tsx";
import {HeroScrollDemo} from "@/components/ui/HeroScrollDemo.tsx";
import {TracingBeamDemo} from "@/components/ui/TracingBeamDemo.tsx";


function App() {


  return (
    <>
        <div className="bg-black text-white min-w-full min-h-full relative">

            <div className="flex justify-center items-center w-full h-full text-center mt-20">
                <VortexDemo className="flex justify-center items-center text-3xl overflow-hidden"/>
            </div>
            <TracingBeamDemo/>
            <HeroScrollDemo/>
            <AnimatedBeamDemo/>
        </div>
    </>
  )
}

export default App
