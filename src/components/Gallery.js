import Image from "next/image";
import kikuCare from "../../public/kikuCare.png";
import raghavEats from "../../public/raghavEats.png";
import milindFit from "../../public/milindFit.png";

const Gallery = () => {
  return (
    <>
      <section className="w-full flex items-center justify-end gap-10">
        <div className="w-[261px] h-[654px] hover:w-[551px] flex items-center justify-end relative duration-500 ease-linear">
          <div  className="w-[261px] h-[654px] hover:w-[551px] duration-500 ease-linear rounded-[20px] overflow-hidden absolute  right-0">
            <Image 
              src={kikuCare}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="loading"
              priority={100}
              style={{
                objectFit:"cover"
              }}
              className="hover:scale-110 duration-500 ease-linear"
            />
          </div>
          </div>
          <div className="w-[261px] h-[654px] hover:w-[551px] bg-[#F9F9F9] flex items-center justify-end relative duration-500 ease-linear rounded-[20px] overflow-hidden">
          <div  className="w-[261px] h-[654px] hover:w-[551px] duration-500 ease-linear rounded-[20px] overflow-hidden absolute  right-0">
            <Image 
              src={raghavEats}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="loading"
              priority={100}
              style={{
                objectFit:"cover"
              }}
              className="hover:scale-110 duration-500 ease-linear"
            />
          </div>
              </div>
              <div className="w-[261px] h-[654px] hover:w-[551px] duration-500 ease-linear flex items-center justify-end relative">
          <div  className="w-[261px] h-[654px] hover:w-[551px] duration-500 ease-linear rounded-[20px] overflow-hidden absolute  right-0">
            <Image 
              src={milindFit}
              fill
              alt="loading"
              priority={100}
              style={{
                objectFit:"cover"
              }}
              className="hover:scale-110 duration-500 ease-linear"
            />
          </div>
          </div>
      </section>
    </>
  );
};

export { Gallery };
