"use client"
import Link from "next/link";
import { Dancing_Script } from 'next/font/google'
import { useState } from "react";
import { AiOutlineMenu as MenuIcon, AiOutlineClose as CloseIcon } from "react-icons/ai";
import Menu from "./Menu";

const dancingScript = Dancing_Script({ subsets: ['latin'] })

interface NavBarMenuOption {
    title: string;
    url: string;
}

export default function NavBar() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const menuOptions: NavBarMenuOption[] = [
        { title: "Home", url: "/" },
        { title: "Skills", url: "/skills" },
    ]

    return (
        <div className="flex flex-col">
            <div className="flex flex-row items-center pl-5 pr-5 bg-[#212D40] min-h-[3rem]">
                <div className={dancingScript.className}>
                    <Link href="/">
                        <span className="text-[#6ACCF5] text-xl">Lucas Fusinato</span>
                    </Link>
                </div>
                <div className="flex flex-1 justify-end sm:hidden">
                    <button onClick={() => setHamburgerOpen(!hamburgerOpen)}>
                        {hamburgerOpen ? <CloseIcon size={25} /> : <MenuIcon size={25} />}
                    </button>
                </div>
                <div className="hidden sm:flex flex-1">
                    <Menu
                        key="navbar-menu"
                        options={menuOptions}
                        hamburgerMode={false}
                    />
                </div>
            </div>
            <div className="sm:hidden">
                <Menu
                    key="mobile-hamburger-menu"
                    options={menuOptions}
                    hamburgerMode={true}
                    isHamburgerOpened={hamburgerOpen}
                    onClickItem={() => setHamburgerOpen(false)}
                />
            </div>
        </div>
    )
}