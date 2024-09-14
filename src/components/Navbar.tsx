"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import shirt from "../components/photos/men shirt.webp"
import pant from "../components/photos/men trouser.webp"
import tshirt from "../components/photos/men tshirt.webp"
import tux from "../components/photos/men suit.webp"
import wshirt from "../components/photos/women shirt.webp"
import dress from "../components/photos/women dress.webp"
import wpant from "../components/photos/women trouser.webp"
import wtux from "../components/photos/women suit.webp"
import kdress from "../components/photos/kids dress.webp"
import costume from "../components/photos/kids costume.webp"
import onesie from "../components/photos/kids onesie.webp"
import night from "../components/photos/kids night.webp"





function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return(
        <div
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Home">
                    </MenuItem>
                </Link>

                <MenuItem setActive={setActive} active={active} item="Mens">
                <div className="  text-sm grid grid-cols-4 gap-10 p-4">
                    <ProductItem
                            title="Shirt"
                            href="/men/shirt"
                            src={shirt}
                            description="Explore our wide variety of shirts for formal, informal and all your awaited occasions!"
                        />
                        <ProductItem
                            title="T-shirt"
                            href="/men/tshirt"
                            src={tshirt}
                            description="Find your perfect match this summer starting with our wide collection tshirts!"
                        />
                        <ProductItem
                            title="Trousers"
                            href="/men/pants"
                            src={pant}
                            description="'Walk good, feel good' Our wide collection of trousers awaits your exploration"
                        />
                        <ProductItem
                            title="Tuxedo"
                            href="/men/tux"
                            src={tux}
                            description="Warm the hearts of your loved ones with our wide collage of tuxedo this winter"
                        />
                </div>  
                </MenuItem>

                <MenuItem setActive={setActive} active={active} item="Women">
                <div className="  text-sm grid grid-cols-4 gap-10 p-4">
                    <ProductItem
                            title="Shirt"
                            href="/women/shirt"
                            src={wshirt}
                            description="Flaunt your elegance with our wide variety of shirts exclusively for this season!"
                        />
                        <ProductItem
                            title="Dress"
                            href="/women/tshirt"
                            src={dress}
                            description="Cottagecore or gothic? Wear what you want and be who you are!"
                        />
                        <ProductItem
                            title="Trousers"
                            href="/women/pants"
                            src={wpant}
                            description="Want to go for a morning run? You just ran to the perfect destination!"
                        />
                        <ProductItem
                            title="Co-ord"
                            href="/women/tux"
                            src={wtux}
                            description="Can't decide what to wear? We have an outfit ready just for you!"
                        />
                </div>  
                </MenuItem>

                <MenuItem setActive={setActive} active={active} item="Kids">
                <div className="  text-sm grid grid-cols-4 gap-10 p-4">
                    <ProductItem
                            title="Dress"
                            href="/kids/dress"
                            src={kdress}
                            description="Let your daughter play all she wants with our collection of dresses designed just for those little butterflies!"
                        />
                        <ProductItem
                            title="Onesie"
                            href="/kids/dress"
                            src={onesie}
                            description="End their ENDLESS nags with our variety of ONEsies!"
                        />
                        <ProductItem
                            title="Night-wear"
                            href="/kids/night"
                            src={night}
                            description="No more nightmares! Gift your kid a good sleep with our collage of night-wears!"
                        />
                </div>  
                </MenuItem>

                

                <Link href={"/cart"}>
                    <MenuItem setActive={setActive} active={active} item="Cart">
                    </MenuItem>
                </Link>
                
                {/* <Link href={"/contacts"}>
                    <MenuItem setActive={setActive} active={active} item="Contact Us">
                    </MenuItem>
                </Link>
                 */}
            </Menu>
        </div>
    )
}

export default Navbar