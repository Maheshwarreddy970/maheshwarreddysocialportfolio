import React from 'react'
import BlurFade from './ui/Blurfade'
import { IoCalendarOutline } from 'react-icons/io5';
import { RiTwitterXLine } from 'react-icons/ri';
import { DATA } from '@/data/resume';

export default function Footersection() {
    return (
        <section id="contact" className=" border flex flex-col items-center dark:border-zinc-700 shadow-md pt-5 pb-10 rounded-t-xl px-5">
            <BlurFade className="font-bold px-4  text-lg my-1.5">
                Contact
            </BlurFade >
            <BlurFade className="font-bold text-4xl my-1.5">
                Get in Touch
            </BlurFade >
            <BlurFade className="  text-center my-1.5">
                Have a question or want to collaborate? Feel free to send me a direct message on Twitter, and I&apos;ll get back to you as soon as possible. Please note, I do not respond to unsolicited messages.
            </BlurFade>
            <div className=" flex justify-center gap-3 w-full  bg-black/5 rounded-xl p-4 dark:bg-white/10">
                {
                    DATA.bookmeeting &&
                    <a href={DATA.bookmeeting} target='_blank' className=' rounded-full border flex gap-4 items-center shadow-md px-4 py-1.5 dark:bg-black dark:border-white/25 bg-white text-lg font-semibold'>
                        Book Meeting
                        <IoCalendarOutline />
                    </a>
                }
                <a href={DATA.x} target='_blank' className=' rounded-full border shadow-md py-2 px-2.5 flex justify-start items-center dark:border-white/25 dark:bg-black bg-white'>
                    <RiTwitterXLine className=' size-5' />
                </a>
            </div>
        </section>
    )
}
