"use client"

import { motion, useTransform, MotionValue } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import BlurFade from './Blurfade';
import { Project } from '@/data/resume';


interface ProjectCardProps {
    project: Project;
    index: number;
    x: MotionValue<number>;
    containerWidth: number;
    springOptions: object;
}

export default function ProjectCard({ project, index, x, containerWidth, springOptions }: ProjectCardProps) {
    const range = [
        (-100 * (index + 1) * containerWidth) / 100,
        (-100 * index * containerWidth) / 100,
        (-100 * (index - 1) * containerWidth) / 100,
    ];
    const outputRange = [90, 0, -90];
    const rotateY = useTransform(x, range, outputRange, {
        clamp: false,
    });

    return (
        <motion.div
            className="relative flex shrink-0 border dark:border-white/30 bg-white dark:bg-black p-4 rounded-xl flex-col items-start justify-between"
            style={{
                width: 400,
                height: "100%",
                rotateY: rotateY,
            }}
            transition={springOptions}
        >
            <div className=" w-full pointer-events-none">
                <BlurFade className={cn("block cursor-pointer w-full")}>
                    {project.video && (
                        <video
                            src={project.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="pointer-events-none h-52 w-full rounded-lg shadow-lg dark:border-white/25 dark:shadow-white/30 border object-cover object-top"
                        />
                    )}
                    {project.image && (
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={500}
                            height={300}
                            className="h-52 w-full overflow-hidden object-cover object-top shadow-lg dark:border-white/25 dark:shadow-white/30 border rounded-lg"
                        />
                    )}
                </BlurFade>
            </div>
            <BlurFade className=' flex flex-col gap-1 mt-3'>
                <h2 className=' font-semibold text-xl'>{project.title}</h2>
                <p className=' text-sm'>{project.dates}</p>
                <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                    {project.description}
                </p>
            </BlurFade>
            <div className="flex flex-col px-2">
                {project.technologies && project.technologies.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                        {project.technologies?.map((tag) => (
                            <BlurFade className="px-2 py-1 text-[10px] rounded-full dark:shadow-white/40 shadow" key={tag}>
                                @{tag}
                            </BlurFade>
                        ))}
                    </div>
                )}
            </div>
            <div className="px-2 pb-2 mt-4">
                {project.links && project.links.length > 0 && (
                    <div className="flex flex-row flex-wrap items-start gap-1">
                        {project.links?.map((link, idx) => (
                            <Link href={link?.href} key={idx} target="_blank">
                                <BlurFade key={idx} className="flex gap-1 bg-black text-white dark:bg-white dark:text-black rounded-full shadow-md px-2 py-1 items-center text-sm">
                                    {link.icon}
                                    {link.type}
                                </BlurFade>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
}
