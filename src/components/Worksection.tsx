import React from 'react'
import WorkExprienceCard from "@/components/ui/WorkExprience_Card";
import BlurFade from "@/components/ui/Blurfade";
import { DATA } from '@/data/resume';

export default function Work() {
  return (
    <section id="exprience" className=" border dark:border-zinc-700 shadow-md p-5 rounded-xl px-5">
      <BlurFade className="font-bold text-2xl flex items-center my-1.5">
        Work Experience
      </BlurFade>
      <div className=" space-y-4 rounded-xl bg-black/5 dark:bg-white/10 p-3 shadow">
        {
          DATA.work.map((work) => (
            <WorkExprienceCard key={work.company}
              logoUrl={work.logoUrl}
              location={work.location}
              company={work.company}
              title={work.title}
              period={`${work.start} - ${work.end ?? "Present"}`}
              description={work.description}
            ></WorkExprienceCard>
          ))
        }
      </div>
    </section>)
}
