'use client'

import simple from "../components/SIMPLE.webp"
import Image from "next/image";

export default function Page() {
    return (
        <Image src={simple} fill={true} alt="image" className="flex flex-auto"></Image> 
    );
}