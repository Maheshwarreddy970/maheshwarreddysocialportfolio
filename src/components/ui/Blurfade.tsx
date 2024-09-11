"use client";

import { useRef } from "react";
import {
    AnimatePresence,
    motion,
    useInView,
    Variants,
} from "framer-motion";


interface BlurFadeProps {
    children: React.ReactNode;
    className?: string;
}

export default function BlurFade({
    children,
    className,
}: BlurFadeProps) {
    const duration = 0.4;
    const delay = 0;
    const yOffset = 6;
    const inView = true;
    const inViewMargin = "-50px";
    const blur = "6px";
    const ref = useRef(null);
    const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
    const isInView = !inView || inViewResult;
    const defaultVariants: Variants = {
        hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
        visible: { y: -yOffset, opacity: 1, filter: `blur(0px)` },
    };
    const combinedVariants = defaultVariants;
    return (
        <AnimatePresence>
            <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                exit="hidden"
                variants={combinedVariants}
                transition={{
                    delay: 0.04 + delay,
                    duration,
                    ease: "easeOut",
                }}
                className={className}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
