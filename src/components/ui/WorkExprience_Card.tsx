"use client"

import { cn } from '@/lib/utils';
import React from 'react'
import { MdArrowForwardIos } from 'react-icons/md';
import { AnimatePresence, motion } from 'framer-motion';
import BlurFade from './Blurfade';
import Image from 'next/image';

interface WorkExprienceCardProps {
    logoUrl: string;
    company: string;
    title: string;
    location?: string;
    href?: string;
    period: string;
    description?: readonly string[];
}



export default function WorkExprienceCard({
    logoUrl,
    company,
    title,
    location,
    period,
    description,
}: WorkExprienceCardProps) {

    const [isExpanded, setIsExpanded] = React.useState(false);
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (description) {
            e.preventDefault();
            setIsExpanded(!isExpanded);
        }
    };

    return (

        <a onClick={handleClick} className=" flex w-full group min-h-24 p-2 gap-3 border-b-2 border-white dark:border-black  last:border-b-0">
            <Image height={40} width={40} src={logoUrl} alt='WorkLogo' className=' shadow rounded-lg border-white dark:border-black border-4 size-10 bg-muted-background dark:bg-foreground'></Image>
            <div >
                <BlurFade className=' flex items-center'>
                    <h3 className=' font-semibold text-base'>{title}</h3>
                    <MdArrowForwardIos
                        className={cn(
                            "size-3.5 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                            isExpanded ? "rotate-90" : "rotate-0"
                        )}
                    />
                </BlurFade>
                <BlurFade className=" leading-5	 text-sm ">
                    <p>{company}</p>
                    <p>{period}</p>
                    <p>{location}</p>
                </BlurFade>
                <AnimatePresence initial={false}>
                    {
                        isExpanded &&
                        <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{
                                opacity: isExpanded ? 1 : 0,

                                height: isExpanded ? "auto" : 0,
                            }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{
                                duration: 0.7,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className=' text-sm'
                        >
                            {description?.map((point, i) => (
                                <li key={i} className=' list-disc  list-outside ml-3'>{point}</li>
                            ))}
                        </motion.ul>
                    }
                </AnimatePresence>
            </div>
        </a>
    )
}
