"use client"
import Link from "next/link";
import { Dancing_Script } from 'next/font/google'
import { usePathname } from "next/navigation";

const dancingScript = Dancing_Script({ subsets: ['latin'] })

interface NavBarMenuOption {
    title: string;
    url: string;
}

export default function NavBar() {
    const pathname = usePathname();

    const menuOptions: NavBarMenuOption[] = [
        { title: "Home", url: "/" },
        { title: "Skills", url: "/skills" },
    ]

    return (
        <div className="flex flex-row items-center pl-5 pr-5 bg-[#212D40]">
            <div className={dancingScript.className}>
                <Link href="/">
                    <span className="text-[#6ACCF5] text-xl">Lucas Fusinato</span>
                </Link>
            </div>
            <nav className="flex-1 flex justify-end h-full items-center gap-3">
                {menuOptions.map((option, index) => (
                    <Link
                        key={`menu-option-${index}`}
                        className={`pl-5 pr-5 pt-3 pb-3 font-semibold uppercase h-full ${pathname === option.url ? "bg-[#364156]" : ""}`}
                        title={option.title}
                        href={option.url}
                    >
                        {option.title}
                    </Link>
                ))}
            </nav>
        </div>
    )
}