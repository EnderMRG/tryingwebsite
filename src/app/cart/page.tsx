'use client'
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { Icon } from "lucide-react";

function page() {
  return (
    <div className="min-h-screen bg-neutral-950 dark:bg-dot-white/[0.2] py-12 pt-36">
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">Cart</h1>  
        <div className="flex flex-wrap justify-center">

              <CardContainer className="inter-var m-4">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white font-montserrat"
                  >
                    Your Cart
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    Review the selected items
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      className="text-neutral-500 text-left pb-20 text-sm max-w-sm mt-2 dark:text-neutral-300 font-montserrat"
                    >
                     <ul>
                        <li>Wide trousers @ Rs1999</li>
                        <li>Flared high jeans @ Rs1999</li>
                        <li>Slim fit jacket @ Rs1999</li>
                        <li><br /></li>
                        <li><br /></li>
                        <li>Total: Rs59997</li>
                     </ul>
                    </CardItem>
                    <Link href={"//"}>
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                          Check-Out
                      </CardItem>
                    </Link>
                  </div>
                </CardBody>
              </CardContainer>          
              
        </div>  
    </div>
  )
}

export default page