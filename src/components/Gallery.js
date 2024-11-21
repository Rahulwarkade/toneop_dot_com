import Image from "next/image";
import kikuCare from "../../public/kikuCare.png";
import raghavEats from "../../public/raghavEats.png";
import milindFit from "../../public/milindFit.png";

const Gallery = () => {
  return (
    <>
      <section className="w-full flex items-center justify-end gap-10">
        <div className="w-[261px] h-[654px] hover:w-[551px] flex items-center justify-end relative duration-300 ease-out ">
          <div  className="w-[261px] h-[654px] hover:w-[551px] duration-300 ease-out rounded-[20px] overflow-hidden absolute  right-0">
            <Image 
              src={kikuCare}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="loading"
              priority={100}
              style={{
                objectFit:"cover"
              }}
              className="hover:scale-110 duration-300 ease-out"
            />
          </div>
          </div>
          <div className="w-[261px] h-[654px] hover:w-[551px] bg-[#F9F9F9]  flex items-center justify-end relative duration-300 ease-out rounded-[20px] overflow-hidden">
          <div  className="w-[261px] h-[654px] hover:w-[551px] duration-300 ease-out rounded-[20px] overflow-hidden absolute  right-0">
            <Image 
              src={raghavEats}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="loading"
              priority={100}
              style={{
                objectFit:"cover"
              }}
              className="hover:scale-110 duration-300 ease-out"
            />
            <span className="w-[87px] h-[187px] absolute bg-[#ffffff91] bottom-5  "></span>
          </div>
              </div>
              <div className="w-[261px] h-[654px] hover:w-[551px] duration-300 ease-out flex items-center justify-end relative">
          <div  className="w-[261px] h-[654px] hover:w-[551px] duration-300 ease-out rounded-[20px] overflow-hidden absolute  right-0">
            <Image 
              src={milindFit}
              fill
              alt="loading"
              priority={100}
              style={{
                objectFit:"cover"
              }}
              className="hover:scale-110 duration-300 ease-out"
            />
          </div>
          </div>
      </section>
    </>
  );
};

export { Gallery };
