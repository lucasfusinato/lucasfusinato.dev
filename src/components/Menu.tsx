"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuOption {
    title: string;
    url: string;
}

interface MenuProperties {
    options: MenuOption[];
    hamburgerMode: boolean;
    isHamburgerOpened?: boolean;
    onClickItem?: Function;
}

export default function Menu(props: MenuProperties) {
    const pathname = usePathname();

    return (
        <nav className={
            props.hamburgerMode
            ? `${props.isHamburgerOpened ? "flex" : "hidden"} flex-col bg-[#212D40]`
            : "hidden sm:flex flex-row flex-1 justify-end h-full items-center gap-3"
        }>
            {props.options.map((option, index) => (
                <Link
                    key={`menu-option-${index}`}
                    className={
                        "pl-5 pr-5 pt-3 pb-3 uppercase h-full"
                            + " " + (props.hamburgerMode && props.isHamburgerOpened ? "bg-[#273349]" : (pathname === option.url ? "bg-[#364156]" : ""))
                            + " " + (props.hamburgerMode && props.isHamburgerOpened && pathname === option.url ? "underline" : "")
                            + " " + (pathname === option.url ? "font-bold": "font-semibold")
                    }
                    title={option.title}
                    href={option.url}
                    onClick={() => props.onClickItem && props.onClickItem()}
                >
                    {option.title}
                </Link>
            ))}
        </nav>
    )
}