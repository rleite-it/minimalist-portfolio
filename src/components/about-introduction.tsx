import { SKILLS, SOFTWARE } from "../constants/about-info";
import TextLink from "./text-link";

export default function AboutIntroduction() {
    return (
        <div className='flex justify-between gap-16'>
            <div className='flex flex-col gap-36 w-full'>
                <div className="w-[450px] text-left">
                    <h1 className='max-w-[350px] font-medium text-5xl'>Hi I'm Ricardo Leite, a frontend developer.</h1>
                    <p className='pt-12 text-lg text-zinc-500 font-[Inter]'>My work is mainly focused on frontend development using React, but sometimes I dive into the backend world. I like exploring new ways to do the same thing.</p>
                    <p className='pt-12 text-lg text-zinc-500 font-[Inter]'>My work is mainly focused on frontend development using React, but sometimes I dive into the backend world. I like exploring new ways to do the same thing.</p>
                </div>
                <div className="flex flex-col w-full gap-20">
                    <div className="flex gap-8 items-start">
                        <TextLink text="Main Skills" className="min-w-[150px]" />
                        <p className="flex-1">{SKILLS.join(", ")}</p>
                    </div>
                    <div className="flex gap-8 items-start">
                        <TextLink text="Main Software" className="min-w-[150px]" />
                        <p className="flex-1">{SOFTWARE.join(", ")}</p>
                    </div>
                </div>
            </div>
            <img src="./src/assets/landscape.webp" alt="about landscape image" className="w-[625px] h-[490px]" />
        </div>
    )
}
