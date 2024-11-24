import React from 'react';
import Link from 'next/link';
import Logo from '../../public/logo.png';
import call from '../../public/call.png';
import Image from 'next/image';
const NavBar = ()=>{
    return (
        <>
            <nav className="w-full h-[70px] xl:w-[1600px] xl:h-[70px] px-8 bg-white flex justify-between items-center">
                <div className="w-[32px] h-[32px] xl:hidden">
                    <span className="text-4xl font-normal">&#8801;</span>
                </div>
                <div className="w-[198px] h-[53px] relative">
                    <span className="w-full h-full absolute">
                        <Image
                        src={Logo}
                        alt = "Logo"
                        fill
                        preority={100}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </span>
                </div>
                <div className="w-auto h-full xl:w-[853px] xl:h-[46px] flex items-center justify-between">
                    <div className="w-[623px] h-[27px] hidden xl:flex">
                        <ul className="w-full h-full flex items-center justify-between text-[#666666] text-[18px] leading-[27px]">
                            <li>
                                <span>
                                    <Link href="#">
                                            Our Companies &#11163;
                                    </Link>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <Link href="#">About Us</Link>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <Link href="#">Blogs</Link>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <Link href="#">Media</Link>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <Link href="#">FAQs</Link>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <Link href="#">Career</Link>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="w-[36px] h-[36px] rounded-full xl:w-[130px] xl:h-[46px] xl:rounded-[47px] bg-[#222222] relative flex justify-center items-center">
                        <button className="w-full h-full hidden xl:inline text-center text-[#FFFFFF] text-[16px] font-medium">
                            <Link href="#">Contact Us</Link>
                        </button>
                        <span className="xl:hidden w-[20px] h-[20px] absolute">
                            <Image
                            src={call}
                            alt="Call"
                            fill
                            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                            preority={100}
                            />
                        </span>
                    </div>
                </div>

            </nav>

        </>
    )
}

export {NavBar}