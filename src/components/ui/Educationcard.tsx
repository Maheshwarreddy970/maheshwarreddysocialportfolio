
import React from 'react'
import { GoLinkExternal } from 'react-icons/go';
import BlurFade from './Blurfade';
import Image from 'next/image';

interface EducationCardProps {
    logoUrl: string;
    school: string;
    fieldofstudy?: string;
    href?: string;
    period: string;
    description?: string;
}



export default function EducationCard({
    logoUrl,
    school,
    fieldofstudy,
    href,
    period,
}: EducationCardProps) {


    return (
        <div className=" relative flex w-full group min-h-24 p-2 gap-3 border-b-2 dark:border-black last:border-b-0">
            <Image src={logoUrl} height={40} width={40} alt='WorkLogo' className=' shadow rounded-lg dark:border-black border-white border-4 size-10 bg-muted-background dark:bg-foreground'></Image>
            <div >
                <BlurFade className=' flex items-center'>
                    <h3 className=' font-semibold text-base'>{school}</h3>
                </BlurFade>
                <BlurFade className=" leading-5	 text-sm ">
                    <p>{fieldofstudy}</p>
                    <p>{period}</p>
                </BlurFade>
            </div>
            {
                href &&
                <BlurFade className=' absolute top-1 right-1'>
                    <a href={href} target='_blank'>
                        <GoLinkExternal className='' />
                    </a>
                </BlurFade>
            }
        </div>
    )
}
