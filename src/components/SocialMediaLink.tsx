import Image from "next/image"
import Link from "next/link";

interface SocialMediaLinkProperties {
    link: string;
    image: string;
    description: string;
}

export default function SocialMediaLink(props: SocialMediaLinkProperties) {
    return (
        <Link target="_blank" href={props.link} className="flex rounded-md bg-white p-1">
            <Image src={props.image} alt={props.description} title={props.description} width={32} height={32} />
        </Link>
    )
}