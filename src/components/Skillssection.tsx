import { DATA } from '@/data/resume'
import React from 'react'
import BlurFade from "@/components/ui/Blurfade";

export default function Skillssection() {
    return (
        <section id="skills" className=" border dark:border-zinc-700 shadow-md p-5 rounded-xl px-5">
            <BlurFade className="font-bold text-2xl flex items-center my-1.5">
                Skills
            </BlurFade>
            <div className=" flex flex-wrap gap-3 bg-black/5  dark:bg-white/10 rounded-xl p-4 ">
                {
                    DATA.skills.map((skill, i) => (
                        <BlurFade key={i}>
                            <p key={i} className="btn-transition text-sm sm:text-base hover:scale-105 items-center py-1 bg-white dark:bg-black  px-3 dark:border-white/25  rounded-full border shadow  ">@{skill}</p>
                        </BlurFade>
                    ))
                }
            </div>
        </section>
    )
}
