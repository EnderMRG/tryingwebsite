'use client'
import { div } from "framer-motion/client";
import productData from "../data/grocery.json"
import Link from "next/link";
import Image from "next/image";
import { BackgroundGradient } from "./ui/background-gradient";

interface Items{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    isFeatured: boolean
    
}

function FeaturedProducts(){
    const featuredProcucts = productData.items.filter(item => item.isFeatured)
    return(
        <div className="py-12 bg-blue-950">
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase" >Featured Products</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Get the best items</p>
                </div>
            </div>
            <div className="mt-10 mx-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {featuredProcucts.map(item=>(
                        <div key={item.id} className="flex justify-center">
                            <BackgroundGradient className="flex flex-col rounded-[22px] dark:bg-zinc-900 h-full max-w-sm">
                                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                    <img height={"400px"} width={"400px"} src= {`${item.image}`}></img>
                                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{item.title}</p>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{item.description}</p>
                                    <br/><Link href={`/products/${item.slug}`}> Learn More</Link>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-20 text-center">
                <Link href={"/data"}
                className="px-4 py-2 rounded-2xl border border-neutral-600 text-neutral-700 bg-white hover:bg-stone-800 font-adlam transition duration-200"
                >
                    View All Products
                </Link>
            </div>
        </div>
    )
}
export default FeaturedProducts 