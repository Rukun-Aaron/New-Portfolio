"use client"
import React from 'react'
import { motion } from 'framer-motion'
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

import { TypeAnimation } from 'react-type-animation';


export const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]">
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                <motion.div
                    variants={slideInFromTop}
                    className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                >
                    <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                    <h1 className="Welcome-text text-[13px]">
                        Fullstack Developer Portfolio
                    </h1>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-6 text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white max-w-[650px] w-auto h-auto"
                >

                    <span>
                        Hello, I&apos;m{" "}
                    </span>

                    <TypeAnimation
                        sequence={[
                            'Rukun',
                            1200,
                            'a Developer',
                            1000,
                            'a Data Scientist',
                            1000,
                            'an AI Engineer',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="text-transparent text-2xl pb-3 sm:text-4xl md:text-5xl lg:text-6xl lg:w-max xl:text-7xl  2xl:text-8xl bg-clip-text bg-gradient-to-r  from-purple-500 to-cyan-500"
                    />



                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-lg text-gray-400 my-3 max-w-[600px]"
                >
                    I&apos;m a Full Stack Software Engineer with experience in Website,
                    Mobile, and Software development. Check out my projects and skills.
                </motion.p>
                <motion.a
                    variants={slideInFromLeft(1)}
                    className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                >
                    Learn More!
                </motion.a>
            </div>
            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-full h-full flex justify-center items-center overflow-hidden"
            >
                <div className="rounded-full overflow-hidden">
                    <Image
                        src="/me(3).png"
                        alt="work icons"
                        height={600} // Adjust the height as needed
                        width={600} // Adjust the width as needed
                        className="rounded-full hidden sm:block" // Hide on screens smaller than sm
                    />
                </div>
            </motion.div>


        </motion.div>
    )
}
export default HeroContent;