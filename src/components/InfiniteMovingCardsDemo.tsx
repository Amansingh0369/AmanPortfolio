"use client";

import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import {SparklesCore} from "@/components/ui/sparkles.tsx";


export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[45rem] rounded-md flex flex-col antialiased bg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <div className="z-0 absolute inset-0">
                        <SparklesCore
                            background="transparent"
                            minSize={0.4}
                            maxSize={1}
                            particleDensity={10}
                            className="w-full h-full"
                            particleColor="#FFFFFF"
                        />
                    </div>
         <h1 className="md:text-4xl  mt-14 mb-24 uppercase text-4xl lg:text-7xl font-bold text-center bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text relative text-transparent relative z-20">
         testimonials
                </h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
    {
      quote:
        "Working with Aman on AnnVeda.com was an absolute pleasure. His expertise in Next.js, TypeScript, and Tailwind CSS helped create a visually stunning and highly functional website. The smooth animations powered by AOS added a dynamic user experience, and his focus on performance, accessibility, and SEO ensured a top-tier web presence. Aman’s dedication and technical skills are truly commendable!",
      name: "Annveda.com ",
      title: "Punkuj Kumar, Founder",
    },
    {
      quote:
        "Aman played a crucial role in bringing Nadar-International.com to life. His mastery of Next.js and TypeScript, combined with his attention to scalability and reliability, resulted in a seamless and professional website. The elegant animations and responsiveness elevated the user experience, making our site both engaging and efficient. His commitment to quality and performance is truly outstanding!",
      name: "Nadar-International.com ",
      title: "Manpreet Singh, Founder",
    },
    {
      quote:
        "Aman’s problem-solving skills were a game-changer for us. He not only fixed critical payment automation issues on our PERN-based platform but also optimized our API in Node.js to enable 100% auto-capture for Razorpay transactions. Thanks to his expertise, we eliminated manual processes, significantly improving efficiency and reliability. If you need a full-stack engineer who delivers real impact, Aman is the one!",
      name: "Batchit.in",
      title: "Sahil Arora, Co-Founder",
    },
  ];
  
