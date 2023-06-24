import Image from "next/image"
import SocialMediaLink from "./SocialMediaLink"

export default function ProfileCard() {
    return (
        <div className="flex flex-col justify-center items-center pt-5 pb-5 pl-10 pr-10 gap-5 bg-[#212D40] w-full sm:w-auto sm:min-w-[25rem] rounded-md shadow-md">
            <Image className="rounded-full" src="https://avatars.githubusercontent.com/u/31139370?v=4" alt="Lucas Fusinato Profile Image" title="Lucas Fusinato Profile Image" width={200} height={200} loading="eager" />
            <div className="flex flex-col justify-center items-center gap-0">
                <h1 className="text-2xl font-bold">Lucas Fusinato</h1>
                <h2>🎓 Software Engineer</h2>
                <h2>💼 Full-cycle Developer</h2>
            </div>
            <div className="flex flex-row gap-2.5">
                <SocialMediaLink link="https://www.linkedin.com/in/lucasfusinatozanis" image="/icons/linkedin.png" description="LinkedIn Logo" />
                <SocialMediaLink link="https://github.com/lucasfusinato" image="/icons/github.png" description="GitHub Logo" />
                <SocialMediaLink link="https://calendly.com/lucasfusinato-dev/30min" image="/icons/meeting.png" description="Google Meet Logo" />
            </div>
        </div>
    )
}