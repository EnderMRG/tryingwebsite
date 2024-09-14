'use client'
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import productData from "@/data/grocery.json"
import night from "@/components/photos/kids night.webp"
import Link from "next/link";
import s1 from "../shirt/photos/shirt1.webp"
import s2 from "../shirt/photos/shirt2.webp"
import s3 from "../shirt/photos/shirt3.webp"
import s4 from "../shirt/photos/shirt4.webp"
import s5 from "../shirt/photos/shirt5.webp"
import s6 from "../shirt/photos/shirt6.webp"

function page() {
  return (
    <div className="min-h-screen bg-neutral-950 dark:bg-dot-white/[0.2] py-12 pt-36">
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">Shirts</h1>  
        <div className="flex flex-wrap justify-center">

        <CardContainer className="inter-var m-4">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white font-montserrat"
                  >
                    Regular fit oxford shirt
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    Men shirt for both casual and formal wear
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4" >
                    <Image
                      src={s1}
                      height={200}
                      width={500}
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="night dress"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl text-2x-l font-normal dark:text-white font-adlam"
                    >
                      Rs.1999
                    </CardItem>
                    <Link href={"/"}>
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                          Buy
                      </CardItem>
                    </Link>
                  </div>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var m-4">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white font-montserrat"
                  >
                    Crepe shirt
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    Men classy shirt for workplace parties
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={s2}
                      height={200}
                      width={500}
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="night dress"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white font-adlam"
                    >
                      Rs.1999
                    </CardItem>
                    <Link href={"/"}>
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                          Buy
                      </CardItem>
                    </Link>
                  </div>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var m-4">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white font-montserrat"
                  >
                    Regular fit cambridge shirt
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    Men shirt for a formal business trip
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={s3}
                      height={200}
                      width={500}
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="night dress"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl text-2x-l font-normal dark:text-white font-adlam"
                    >
                      Rs.1999
                    </CardItem>
                    <Link href={"/"}>
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                          Buy
                      </CardItem>
                    </Link>
                  </div>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var m-4">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white font-montserrat"
                  >
                    Regular fit Easy-iron shirt
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    Men simple and chic shirt for everyday use
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={s4}
                      height={200}
                      width={500}
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="night dress"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl text-2x-l font-normal dark:text-white font-adlam"
                    >
                      Rs.1999
                    </CardItem>
                    <Link href={"/"}>
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                          Buy
                      </CardItem>
                    </Link>
                  </div>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var m-4">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white font-montserrat"
                  >
                    Regular fit Cotton shirt
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    Men regular shirt for loungewear
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={s5}
                      height={200}
                      width={500}
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="night dress"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl text-2x-l font-normal dark:text-white font-adlam"
                    >
                      Rs.1999
                    </CardItem>
                    <Link href={"/"}>
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold ">
                          Buy
                      </CardItem>
                    </Link>
                  </div>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var m-4">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white font-montserrat"
                  >
                    Regular fit shirt
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    Men textured-knit for everyday use
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={s6}
                      height={200}
                      width={500}
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="night dress"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl text-2x-l font-normal dark:text-white font-adlam"
                    >
                      Rs.1999
                    </CardItem>
                    <Link href={"https://www.youtube.com/watch?v=EcHQ_qnzp28"}>
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                          Buy
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