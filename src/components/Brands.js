import React from "react";
import svgEffect from "../../public/svgEffect.png";
import mobile from "../../public/mobile.png";
import Image from 'next/image';

const Brands = () => {
  return (
    <>
      <section className="w-11/12 h-4/5 rounded-2xl relative bg-red-300">
        <div className="w-full h-auto relative">
          <div className="w-full h-auto relative flex flex-col gap-2">
            <div className="w-[197px] h-[96px] relative">
              <h1 className="text-[80px] text-[#434343] font-medium leading-[96px] absolute ">
                Care
              </h1>
              <span className="w-[13px] h-[13px] rounded-full absolute left-full bottom-5 bg-[#15C06E]"></span>
            </div>
            <div className="w-[170px] h-[96px] relative">
              <h1 className="text-[80px] text-[#434343] font-medium leading-[96px] absolute ">
                Eats
              </h1>
              <span className="w-[13px] h-[13px] rounded-full absolute left-full bottom-5 bg-[#15C06E]"></span>
            </div>
            <div className="w-[254px] h-[96px] relative">
              <span className="w-fill h-fit absolute  -right-[15%] -top-[30%] z-10">
                <Image src={svgEffect} alt="vertical svg" />
              </span>
              <h1 className="text-[80px] text-[#434343] font-medium leading-[96px] absolute ">
                Get Fit
              </h1>
              <span className="w-[13px] h-[13px] rounded-full absolute left-full bottom-5 bg-[#15C06E]"></span>
            </div>
          </div>
          <div className="w-[419px] h-[48px] leading-[24px] mt-[50px]">
            <p className="text-[18px] text-[#999999] font-normal">
            Personalised Health Plans, Premium Features, Top Coaches, Best Offers
            </p>
          </div>
        </div>
        <div className="w-full h-[70px] relative top-[94px]">
          <span className="w-[251px] h-full bg-[#222222] rounded-[90px]  text-white flex justify-center items-center gap-2 absolute">
            <span>
            <Image 
            src={mobile}
            alt="mobile image"
            />
            </span>
            <button>Download Our App</button>
          </span>
        </div>
        <div className="clip w-[1011px] h-[129px] bg-[#FFFFFF] rounded-[12px] relative top-[120px] px-[24px]">
            <div className="w-[212px] h-[24px] relative top-3">
              <p className="text-[18px] text-[#434343] font-semibold ">Book Fee Consaltation</p>
            </div>
            <div className="w-full h-ahto  relative  top-[22px] flex gap-4">
              <div className="w-[256px] h-[56px] rounded-md relative ">
                <span className="w-full h-full bg-[#F9F9F9] border border-[#15C06E] rounded-[8px] flex items-center px-4 relative">
                  <p className="text-[18px] leading-[24px] text-[#434343] font-medium"> Sudhanshu Tiwari</p>
                </span>
              </div>
              <div className="w-[256px] h-[56px] rounded-md relative ">
                <span className="w-full h-full bg-[#F9F9F9] border border-[#E4E4E4] rounded-[8px] flex items-center px-4">
                  <p className="text-[18px] leading-[24px] text-[#999999] font-medium"> Phone Number</p>
                </span>
              </div>
              <div className="w-[256px] h-[56px] rounded-md relative ">
                <span className="w-full h-full bg-[#F9F9F9] border border-[#E4E4E4] rounded-[8px] flex items-center px-4">
                  <p className="text-[18px] leading-[24px] text-[#999999] font-normal"> Verticle</p>
                  <span className="w-6 h-6 absolute right-6 text-2xl text-[#292D32]">&#11163;</span>
                </span>
              </div>
              <div className="w-[158px] h-[56px] rounded-md relative ">
                <span className="w-full h-full bg-[#222222] rounded-[28px] flex items-center justify-center">
                  <p className="text-[18px] leading-[24px] text-white font-normal">Submit</p>
                </span>
              </div>
            </div>
        </div>
      </section>
    </>
  );
};

export { Brands };
