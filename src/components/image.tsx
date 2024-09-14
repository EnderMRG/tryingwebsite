'use client'

import { div } from "framer-motion/client";
import simple from "../components/SIMPLE.webp"
import Image from "next/image";

export default function Page() {
    return (
        <div className="h-[60rem] w-full dark:bg-black dark relative flex flex-col overflow-hidden">
                <Image src={simple} fill={true} alt="image" className="flex flex-auto"></Image>
        </div>
 
    );
}