'use client'
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { div } from "framer-motion/client";

const reviews=[
    {
        quote: "'Stylish and Comfortable!' - I recently bought a few pieces from Metapparels, and I’m absolutely in love! The fit is perfect, and the fabrics are so comfortable. I’ve gotten so many compliments on my new wardrobe. Definitely my go-to brand now!",
        name: "Dermee Pegu",
        title: "A satisfied Customer"
    },
    {
        quote: "'Sustainable Fashion Done Right!' - I’m always on the lookout for eco-friendly brands, and Metapparels ticks all the boxes. Not only is the clothing stylish and durable, but I also love that they prioritize sustainability. It feels great knowing my fashion choices are helping the planet.",
        name: "Alex Khaklari",
        title: "Another Happy Customer"
    },
    {
        quote: "'Great Quality, Slightly Pricey'- Great Quality, Slightly Pricey",
        name: "Koushik Das",
        title: "Our teacher"
    },
    {
        quote: "'Exceptional Customer Service!, - I had a small issue with my order, but the Metapparels team went above and beyond to resolve it. They were so kind and responsive! Plus, the clothes fit like a dream. I will definitely be shopping here again",
        name: "Ayush",
        title: "Buttering up our senior"
    },
    {
        quote: "'Unique and Trendy!' - Metapparels has become my new favorite brand! Their designs are so unique and trendy, I always feel ahead of the fashion curve. I love how easy the website is to navigate, and delivery was super fast!",
        name: "Nomi Borah",
        title: "We need extra marks"
    }
]

function Feedback(){
    return(
        <div className="h-[40rem] w-full dark:bg-black dark:bg-dot-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
            <h2 className="pt-10 text-5xl font-montserrat text-center mb-8 z-10">Our wonderful reviews</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <InfiniteMovingCards
                items={reviews}
                direction="right"
                speed="slow"
            />
            </div>
        </div>
    )
}

export default Feedback