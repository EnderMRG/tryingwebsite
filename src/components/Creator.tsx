import { div } from "framer-motion/client";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import Image from "next/image";
import mur from "../components/mur.jpeg";
import rap from "../components/rap.jpg";

const coders = [
    {
      id: 1,
      name: 'Moharnab Gogoi',
      designation: 'Front-end Designer',
      image:
        (mur),
    },
    {
      id: 2,
      name: 'EnderMRG',
      designation: 'Core Developer',
      image:
        (rap),
    },
    {
      id: 3,
      name: 'Julia Zhang',
      designation: 'Designer',
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 4,
      name: 'Andre Gomez',
      designation: 'Backend',
      image:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
  ];

function Creator(){
    return(
        <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
            <WavyBackground className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center h-full">
                <br /><br /><br /><br /><br /><br /><br />
                <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8 justify-center">The Creator of Our Website</h2>
                <p className="text-base md:text-lg text-white text-center mb-4">Meet the one single person who created the whole website</p>
                <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={coders} />
            </div>
            </WavyBackground>
        </div>
    )
}

export default Creator