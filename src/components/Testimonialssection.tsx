"use client"

import React from 'react'
import BlurFade from './ui/Blurfade'
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { DATA } from '@/data/resume';
import { FaRegPaperPlane } from 'react-icons/fa';

const transitionDebug = {
    type: "easeOut",
    duration: 0.2,
}


export default function Testimonialssection() {
    const [messages, setMessages] = useState<
        {
            id: number;
            text: string;
        }[]
    >([]);
    const [newMessage, setNewMessage] = useState<string>("");

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        if (newMessage.trim()) {
            const timestamp = new Date().getTime();
            setMessages([...messages, { id: timestamp, text: newMessage }]);
            setNewMessage("");
        }
    };
    return (
        <section id="testimonial" className=" border dark:border-zinc-700 shadow-md p-5 rounded-xl px-5">
            <BlurFade className="font-bold text-2xl flex items-center my-1.5">
                Words of Appreciation
            </BlurFade>
            <BlurFade className="flex items-center my-1.5">
                Honest feedback from clients and colleagues who have worked with Maheshwar Reddy.
            </BlurFade>
            <div className=" bg-black/5 dark:bg-white/10 rounded-xl px-4 py-6  space-y-3">
                {
                    DATA.testimonials.map((message, i) => (
                        <div key={i} className=" flex justify-start items-end gap-1">
                            <img src={message.image} alt=" avatar" className=' rounded-full size-9 object-cover '></img>
                            <div className='p-3 bg-white/85 text-black dark:bg-black/90 dark:text-white dark:border-white/20  shadow-md text-xs sm:text-sm max-w-[90%] rounded-r-3xl rounded-tl-3xl border'>
                                {message.text}
                                <p className=' mt-2 font-semibold text-xs sm:text-base'>{message.name}</p>
                            </div>
                        </div>
                    ))
                }
                <AnimatePresence mode="wait">
                    {messages.map((message) => (
                        <motion.div
                            key={message.id}
                            layout="position"
                            className="flex justify-end items-end gap-1"
                            layoutId={`container-[${messages.length - 1}]`}
                            transition={transitionDebug}
                        >
                            <div className='p-3 bg-white/85  dark:bg-black/90 dark:text-white dark:border-white/25 text-black shadow-md text-xs sm:text-sm max-w-[90%] rounded-s-3xl rounded-tr-3xl  border'>
                                {message.text}
                                <p className=' text-sm sm:text-base mt-2 font-semibold'>{DATA.name}</p>
                            </div>
                            <img src={DATA.avatarUrl} alt=" avatar" className=' rounded-full size-9 object-cover '></img>
                        </motion.div>
                    ))}
                </AnimatePresence>
                <form onSubmit={handleSubmit} className="flex w-full pt-7">
                    <input
                        type="text"
                        onChange={(e) => setNewMessage(e.target.value)}
                        value={newMessage}
                        className="relative h-10 flex-grow rounded-full border  shadow-md  bg-white dark:bg-black px-3 text-[15px] outline-none placeholder:text-gray-400 -white/15 dark:text-white dark:border-white/20 dark:placeholder-gray-400 "
                        placeholder="Type your message"
                    />
                    <motion.div
                        key={messages.length}
                        layout="position"
                        className="pointer-events-none absolute z-10 flex h-9 items-center overflow-hidden break-words rounded-full"
                        layoutId={`container-[${messages.length}]`}
                        transition={transitionDebug}
                        initial={{ opacity: 0.6, zIndex: -1 }}
                        animate={{ opacity: 0.6, zIndex: -1 }}
                        exit={{ opacity: 1, zIndex: 1 }}
                    >
                        <div className="px-3 py-2 text-[15px] leading-[15px] text-gray-900 dark:text-gray-100">
                            {newMessage}
                        </div>
                    </motion.div>
                    <button
                        type="submit"
                        className="ml-2 flex h-9 w-9 items-center justify-center rounded-full border shadow-md dark:bg-black dark:border-white/25  bg-white"
                    >
                        <FaRegPaperPlane className="h-5 w-5 " />
                    </button>
                </form>
            </div>
        </section>
    )
}
