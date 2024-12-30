"use client";
import { FloatingNav } from "../ui/floating-navbar";
import {
    IconBrandGithub, IconBrandLinkedin,
    IconBrandX, IconCode, IconFileFilled,
    IconHome,
    IconTerminal2,
} from "@tabler/icons-react";
export function FloatingNavDemo() {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-300 dark:text-neutral-300" />
            ),
            href: "#home",
        },
        {
            title: "Skills",
            icon: (
                <IconCode className="h-full w-full text-neutral-300 dark:text-neutral-300" />
            ),
            href: "#skills",
        },
        {
            title: "Project",
            icon: (
                <IconTerminal2 className="h-full w-full text-neutral-300 dark:text-neutral-300" />
            ),
            href: "#projects",
        },
        {
            title: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-300 dark:text-neutral-300" />
            ),
            href: "https://www.linkedin.com/in/aman-singh-01663b231/",
        },
        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-300 dark:text-neutral-300" />
            ),
            href: "https://x.com/singh0369aman/",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-300 dark:text-neutral-300" />
            ),
            href: "https://github.com/Amansingh0369",
        },
        {
            title: "Resume",
            icon: (
                <IconFileFilled className="h-full w-full text-neutral-300 dark:text-neutral-300" />
            ),
            href: "https://drive.google.com/file/d/1D26WgGSi3xGFPN0qmXqUZkbjSdd2vow6/view",
        }
    ];
    return (
        <div className="relative bg-black justify-start  w-1 hidden sm:block">

            <FloatingNav  mobileClassName="translate-y-[45rem]" // only for demo, remove for production
                          items={links}
            />

        </div>
    );
}
