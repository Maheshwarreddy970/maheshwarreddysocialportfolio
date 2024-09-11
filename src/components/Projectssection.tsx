"use client"

import { DATA } from '@/data/resume';
import { PanInfo, useMotionValue, motion } from 'framer-motion';
import React, { useState } from 'react'
import BlurFade from './ui/Blurfade';
import ProjectCard from './ui/ProjectCard';

const ITEM_WIDTH = 400;
const DRAG_BUFFER = 50;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const CONTAINER_WIDTH = ITEM_WIDTH + GAP;

const SPRING_OPTIONS = {
    type: "spring",
    stiffness: 300,
    damping: 30,
};

export default function ProjectsSection() {

    const x = useMotionValue(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;

        if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
            setCurrentIndex((prev) => Math.min(prev + 1, DATA.projects.length - 1));
        } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
            setCurrentIndex((prev) => Math.max(prev - 1, 0));
        }
    };

    const leftConstraint = -((ITEM_WIDTH + GAP) * (DATA.projects.length - 1));

    return (
        <section id="projects" className=" border dark:border-zinc-700 shadow-md p-5 rounded-xl px-2 sm:px-5">
            <BlurFade className="font-bold text-2xl flex items-center my-1.5">
                Projects
            </BlurFade>
            <BlurFade className=" flex items-center my-1.5">
                I’ve had the opportunity to work on a range of projects, from straightforward websites to more complex web applications. Here are a few of my favorites
            </BlurFade>
            <div className="flex flex-wrap gap-3 justify-center overflow-hidden relative bg-black/5 dark:bg-white/10 rounded-xl p-4">
                <motion.div
                    className="flex"
                    drag="x"
                    dragConstraints={{
                        left: leftConstraint,
                        right: 0,
                    }}
                    style={{
                        width: ITEM_WIDTH,
                        gap: `${GAP}px`,
                        perspective: 1000,
                        perspectiveOrigin: currentIndex * ITEM_WIDTH + ITEM_WIDTH / 2,
                        x,
                    }}
                    onDragEnd={handleDragEnd}
                    animate={{ x: -(currentIndex * (ITEM_WIDTH + GAP)) }}
                    transition={SPRING_OPTIONS}
                >
                    {DATA.projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            index={index}
                            x={x}
                            containerWidth={CONTAINER_WIDTH}
                            springOptions={SPRING_OPTIONS}
                        />
                    ))}
                </motion.div>
            </div>
            <div className="flex w-full justify-center">
                <div className="mt-8 flex w-[150px] justify-between px-6">
                    {DATA.projects.map((_, index) => (
                        <motion.div
                            key={index}
                            className={`h-2 w-2 cursor-pointer rounded-full transition-colors duration-150 ${currentIndex === index
                                ? "bg-black shadow-md dark:bg-white h-3 -mt-1 w-3"
                                : "bg-black/40 dark:bg-white/40"}`}
                            animate={{ scale: currentIndex === index ? 1.2 : 1 }}
                            onClick={() => setCurrentIndex(index)}
                            transition={{ duration: 0.15 }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
