import React from "react";
import { Socials } from "@/constants";
import Image from "next/image";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,

} from "react-icons/rx";
import { SiGmail } from "react-icons/si";

import { FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-[30] ">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">

                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Social Media Links</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaInstagram />
                            <span className="text-[15px] ml-[6px]">Instagram</span>
                        </p>

                        <p className="flex flex-row items-center my-[15px] cursor-pointer">

                            <Image
                            src={"./facebook.svg"}
                            alt="facebook"
                            width={15}
                            height={15}
                            />
                            <span className="text-[15px] ml-[6px]">FaceBook</span>
                        </p>

                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Contact me professionally </div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxLinkedinLogo />
                            <span className="text-[15px] ml-[6px]">Linkedin</span>
                        </p>
                        
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <SiGmail />
                            <span className="text-[15px] ml-[6px]">rukun.aaron9@gmail.com</span>
                        </p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Footer