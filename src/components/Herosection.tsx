import { ModeToggle } from "@/components/mode-toggle";
import BlurFade from "@/components/ui/Blurfade";
import { DATA } from "@/data/resume";
import Emailicon from "@/icons/Emailicon";
import Verificationicon from "@/icons/Verificationicon";
import Image from "next/image";
import { HiOutlineDownload } from "react-icons/hi";

export default function Herosection() {
    return (
        <section id="hero" className="border dark:border-zinc-700 shadow-md pb-5 rounded-b-xl">
            <BlurFade>
                <div>
                    <Image
                        className="w-full h-40 object-cover"
                        alt="cover image"
                        src={DATA.coverimageUrl}
                        width={800}
                        height={160}
                        priority
                    />
                    <div className="flex justify-between items-start px-5">
                        <Image
                            className=" h-28 w-28 sm:w-36 sm:h-36 -mt-10 sm:-mt-16 hover:shadow-md rounded-full border-4 border-white dark:border-black z-10 relative"
                            src={DATA.avatarUrl}
                            alt="avatar"
                            width={144}
                            height={144}
                            priority
                        />
                        <div className="flex gap-2 mt-3">
                            <ModeToggle />
                            <a href={`mailto:${DATA.contact.email}`} className="border shadow rounded-full h-10 w-10 btn-transition dark:border-white/25  borderdark:border-none border-b flex justify-center items-center p-2">
                                <Emailicon></Emailicon>
                            </a>
                            <a download={true} href={DATA.resume} className="rounded-full border btn-transition flex gap-2 items-center shadow dark:bg-white dark:text-black dark:border-white/25  bg-black text-white px-4 py-1.5">
                                Download CV
                                <HiOutlineDownload className="size-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </BlurFade>
            <div className="px-5 mt-5">
                <BlurFade className="font-bold text-2xl flex items-center gap-1">
                    Maheshwar Reddy
                    <Verificationicon />
                </BlurFade>
                <BlurFade className="mt-2">
                    <p className=" text-zinc-500 text-sm sm:text-base dark:text-zinc-300 leading-5 ">
                        {DATA.description}
                    </p>
                </BlurFade>
            </div>
            <BlurFade className=" flex gap-2 flex-wrap px-5 mt-2">
                {
                    DATA.contact.social.map((item, i) => (
                        <a target="_blank" className=" flex gap-1 text-sm sm:text-base btn-transition bg-black/5 dark:border-white/25  items-center px-3 py-1.5 rounded-full border shadow " href={item.url} key={i}>
                            <span className=" [&>*]:size-6 ">{item.icon()}</span>
                            <span className="">{item.name}</span>
                        </a>
                    ))
                }
            </BlurFade>
        </section>)
}
