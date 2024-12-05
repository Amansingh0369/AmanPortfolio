"use client";
import React from "react";
import {
    TextRevealCard,
    TextRevealCardDescription,
    TextRevealCardTitle,
} from "../ui/text-reveal-card";

export function TextRevealCardPreview() {
    return (
        <div className="  flex  justify-center h-full rounded-2xl w-full">
            <TextRevealCard
                text="I am Aman Kumar Singh, a Full Stack Developer based in India. With experience in developing scalable applications since 2019, I focus on using modern technologies like JavaScript, React, Node.js, Express, MongoDB, and PostgreSQL."
                revealText=" My portfolio showcases my work, including open-source contributions and projects like note-taking and transaction apps.I'm passionate about creating efficient solutions and contributing to the developer community."
            >
            </TextRevealCard>
        </div>
    );
}
