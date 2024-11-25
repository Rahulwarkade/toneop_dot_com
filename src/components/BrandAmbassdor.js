import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import kikuCare from "../../public/kikuCare.png";
import raghavEats from "../../public/raghavEats.png";
import milindFit from "../../public/milindFit.png";

const BrandAmbassdor = ()=>{

    const models = [{imgUrl:kikuCare,product:"ToneOp Care",stats:"45",statsTitle:"Health Products"},{imgUrl:raghavEats, product: "ToneOp Eats",stats:"45",statsTitle:"Healthy Dishes"},{imgUrl:milindFit,product:"ToneOp Fit",stats:"4500",statsTitle:"Transformation"}];
    return (
        <>

        {models.map((model,idx)=>{
          return <div key={idx} className="w-[261px] h-[654px] hover:w-[551px] bg-[#F9F9F9]  flex items-center justify-end relative duration-300 ease-out rounded-[20px] overflow-hidden show-black-box">
          <div className="w-[261px] h-[654px] hover:w-[551px] duration-300 ease-out rounded-[20px] overflow-hidden absolute  right-0">
            <Image
              src={model.imgUrl}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="loading"
              style={{
                objectFit: "cover",
              }}
              className="hover:scale-110 duration-300 ease-out"
            />
            <span className="overlay w-full h-[448px] absolute bottom-0 opacity-60 bg-gradient-to-b from-[#FFFFFF00]  to-[#FFFFFF]"></span>
            <span className="overlay w-full h-[448px] absolute bottom-0 opacity-60 bg-gradient-to-b from-[#00000000]  to-[#000000]"></span>
            <span className="w-[87px] h-[187px] absolute bg-[#ffffff91] left-0 bottom-5 backdrop-blur-2xl flex justify-center items-center black-box duration-300 ease-out">
              <span className="absolute text-[18px] font-medium text-white  text-nowrap   -rotate-90 hover:rotate-0">
                <Link href="#" className="white-text duration-300 ease-out">
                  {model.product}
                </Link>
                <Link
                  href="#"
                  className="black-text hidden duration-300 ease-out"
                >
                  {model.product} &#10217;
                </Link>
              </span>
            </span>
            <span className="w-[143px] h-[187px] absolute right-0 bottom-5  flex flex-col justify-center items-center duration-300 ease-out leading-[24px] translate-x-full transparent-box">
              <h1 className="text-white text-[32px] font-medium">{model.stats}+</h1>
              <p className="text-white text-[18px] font-normal">
                {model.statsTitle}
              </p>
            </span>
          </div>
        </div>;
        })}
        </>
    )
}


export {BrandAmbassdor}