import Image from "next/image"

interface SocialMediaLinkProperties {
    link: string;
    image: string;
    description: string;
}

export default function SocialMediaLink(props: SocialMediaLinkProperties) {
    return (
        <a target="_blank" href={props.link} className="flex rounded-md bg-white p-1">
            <Image src={props.image} alt={props.description} title={props.description} width={32} height={32} loading="eager" />
        </a>
    )
}