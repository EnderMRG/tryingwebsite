"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import exclusive from "../ui/why/exclusive.webp"
import express from "../ui/why/express.webp"
import shop from "../ui/why/shop.webp"
import sus from "../ui/why/sus.webp"
import exp from "constants";

const perks = [
    {
      title: "Exclusive, High-Quality Fashion Collections",
      description:
        " Our website offers a curated selection of premium clothing designed for style-conscious individuals. Each item is crafted with attention to detail, ensuring quality and uniqueness that you won’t find elsewhere.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
              <Image
                src={exclusive}
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="linear board demo"
              />
            </div>
          ),
    },
    {
      title: "Personalized Shopping Experience",
      description:
        "At Metapparals, we prioritize customer satisfaction by offering personalized recommendations based on your preferences. Our easy-to-navigate site helps you discover fashion that aligns with your style effortlessly.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
              <Image
                src={shop}
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="linear board demo"
              />
            </div>
          ),
    },
    {
      title: "Sustainable and Ethical Fashion",
      description:
        " We are committed to promoting sustainable practices. Metapparals’ collections feature eco-friendly materials and ethical manufacturing processes, making your purchase a responsible choice for the environment.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
              <Image
                src={sus}
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="linear board demo"
              />
            </div>
          ),
    },
    {
      title: "Express Your Unique Style with Confidence",
      description:
        "4. At Metapparels, we believe that clothing is more than just fabric—it's a reflection of your personality and confidence. Our collections are designed to empower you to express your individuality, helping you feel bold, authentic, and unstoppable in every outfit you wear.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
              <Image
                src={express}
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="linear board demo"
              />
            </div>
          ),
    },
  ];

function WhyChooseUs(){
    return(
        <div>
            <StickyScroll content={perks}></StickyScroll>
        </div>
    )
}

export default WhyChooseUs