import React from 'react'
import EducationCard from "@/components/ui/Educationcard";
import { DATA } from '@/data/resume'
import BlurFade from "@/components/ui/Blurfade";

export default function Educationsection() {
    return (
        <section id="education" className=" border dark:border-zinc-700 shadow-md p-5 rounded-xl px-5">
            <BlurFade className="font-bold text-2xl flex items-center my-1.5">
                Education
            </BlurFade>
            <div className=" space-y-4 rounded-xl bg-black/5 dark:bg-white/10 p-3 shadow ">
                {
                    DATA.education.map((data, i) => (
                        <EducationCard
                            key={i}
                            school={data.school}
                            fieldofstudy={data.degree}
                            logoUrl={data.logoUrl}
                            href={data.href}
                            period={`${data.start} - ${data.end ?? "Present"}`}
                        ></EducationCard>
                    ))
                }
            </div>
        </section>
    )
}
