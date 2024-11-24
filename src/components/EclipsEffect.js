import React from "react";
import svgEffect from "../../public/svgEffect.png";
import Image from "next/image";

const EclipsEffect = () => {
  return (
    <>
      <div className="w-[1600px] h-[450px] bg-gradient-to-r from-[#FFE6CF80] to-[#DDECFF80] relative overflow-hidden">
        <div className="eclipsOne hidden md:inline w-[411px] h-[411px] absolute rounded-full left-[205px] top-[137px] bg-gradient-to-r from-[#FFE6CF99] to-[#FFFFFF99] duration-[10000ms] ease-in-out"></div>
        <div className="eclipsOneRes md:hidden w-[270px] h-[270px] absolute rounded-full -left-[150px] -top-[130px] bg-gradient-to-r from-[#FFE6CF99] to-[#FFFFFF99] duration-[10000ms] ease-in-out"></div>
        <div className="eclipsTwo hidden md:inline w-[171px] h-[171px] rounded-full bg-gradient-to-r from-[#DDECFF99] to-[#FFFFFF99]  absolute left-[1015px] top-[20px] duration-[10000ms] ease-in-out"></div>
        <div className="eclipsTwoRes md:hidden z-10 w-[76px] h-[76px] rounded-full bg-gradient-to-r from-[#DDECFF99] to-[#FFFFFF99]  absolute left-[50px] -bottom-[20px] duration-[10000ms] ease-in-out"></div>
        <div className="eclipsThree hidden md:inline w-[185px] h-[185px] absolute rounded-full bg-gradient-to-r from-[#DDECFF99] to-[#FFFFFF99] top-[314px] left-[95%] duration-[10000ms] ease-in-out"></div>
        <div className="eclipsThreeRes md:hidden w-[117px] h-[117px] absolute rounded-full bg-gradient-to-r from-[#DDECFF99] to-[#FFFFFF99] top-[73%] left-[75%] duration-[10000ms] ease-in-out"></div>

        <div className="w-full h-full absolute flex flex-col items-center justify-center gap-4">
          <div className="w-[188px] h-[56px] relative">
            <span className="w-fill h-fit absolute  -right-[20%] -top-[35%] ">
              <Image src={svgEffect} alt="vertical svg" />
            </span>
            <h1 className="text-[42px] text-nowrap text-[#222222] font-normal  absolute ">
              About Us
            </h1>
          </div>
          <div className="w-full h-fit text-center">
            <p className="text-[24px] text-[#999999] ">
              Explore the latest fitness insights and find your inspiration in
              our blogs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export { EclipsEffect };
