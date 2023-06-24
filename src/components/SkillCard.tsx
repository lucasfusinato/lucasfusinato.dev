import Image from "next/image";

interface SkillCardProperties {
    title: string;
    image: string;
    items: string[];
}

export default function SkillCard(props: SkillCardProperties) {
    return (
        <div className="flex flex-col items-start justify-center gap-3 bg-[#212D40] shadow-md p-3">
            <div className="text-center w-full">
                <h2 className="text-xl font-bold">{props.title}</h2>
            </div>
            <div className="flex flex-row w-full gap-10">
                <div className="flex justify-center items-center">
                    <Image src={props.image} alt={props.title} title={props.title} width={80} height={80} />
                </div>
                <div className="flex-grow">
                    <ul className="list-disc">
                        {props.items.map((item, index) => (
                            <li key={`skill-item-${index}`}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}