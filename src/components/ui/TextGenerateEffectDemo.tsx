"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `I am Aman Kumar Singh, a passionate Full-Stack Developer from India with expertise in building scalable, secure, and user-friendly web applications. My tech stack includes React.js, Node.js, Express.js, MongoDB, PostgreSQL, Prisma ORM, and more. I specialize in crafting responsive designs and efficient backends, evident in projects like NOTE~iT, a Transaction App, and my Portfolio Website.
`;

export function TextGenerateEffectDemo() {
    return <TextGenerateEffect words={words} className={"text-white relative"}/>;
}
