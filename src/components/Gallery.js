import React from "react";
import Image from "next/image";
import kiku from "../../public/kiku.png";
import raghav from "../../public/raghav.png";
import milind from "../../public/milind.jpeg";

const Gallery = () => {
  return (
    <>
      <section className="w-full flex items-center justify-center">
        <div className="w-[1113px] h-[654px]  flex items-center justify-end">

          <div className="container ml-10 w-[261px] h-[654px]  rounded-[20px] overflow-hidden relative">
            <Image
              src={kiku}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="loading"
              priority={100}
              className="gallery"
            />
          </div>
          <div className="container ml-10 w-[250px] h-[654px] rounded-[20px] overflow-hidden relative bg-[#F9F9F9]">
            <Image
              src={raghav}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="loading"
              priority={100}
              className="gallery"
            />
          </div>
          <div className="container ml-10 w-[250px] h-[654px]  rounded-[20px] overflow-hidden relative">
            <Image
              src={milind}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="loading"
              priority={100}
              className="gallery"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export { Gallery };
