import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border"
import Image from "next/image"

function HeroSection() {
    return (
        <div className="h-auto md:h-[52rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
            <div className="p-4 relative z-10 w-full text-center flex flex-col">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="grey"/>
                <h1 className="mt-40 md:mt-40 text-4xl md:text-8xl justify-center font-bold bg-clip-text font-italiana tracking-widest text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 flex flex-col">
                <br/><br></br><br></br>M E T A P P A R E L S</h1>
                <p className="mt-7 font-normal text-base md:text-lg text-neutral-300 max-w-65 mx-80 font-montserrat flex flex-col">
                <br></br><br/> Welcome to Metapparels, where fashion meets innovation! At the heart of our brand is a dedication to creating unique, contemporary clothing that blends style with sustainability. Inspired by modern trends and driven by a passion for quality, we craft pieces designed to make you feel confident and comfortable in your own skin.
                </p>
                <br></br>
                {/* <div className="mt-4">
                    <Link href={"/products"}>
                        <Button  
                        borderRadius="1.75rem">
                            Explore     
                        </Button>
                    </Link>
                </div> */}
            </div>
        </div>
    )
}

export default HeroSection