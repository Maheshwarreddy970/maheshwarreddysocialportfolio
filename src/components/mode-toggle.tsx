"use client";

import { useTheme } from "next-themes";
import { CgSun } from "react-icons/cg";
import { IoMoonOutline } from "react-icons/io5";


export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <button
            className="  shadow rounded-full h-10 w-10 dark:shadow-inner dark:border-white/25   border transition-all active:scale-95 duration-100 ease-in-out border-b flex justify-center items-center p-2"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            <CgSun className="h-full w-full text-neutral-800 dark:hidden dark:text-neutral-200" />
            <IoMoonOutline className="hidden h-full w-full text-neutral-800 dark:block dark:text-neutral-200" />
        </button>
    );
}