import React from 'react'
import Image from 'next/image';
import svgVerticals from '../../public/svgEffect.png';

const SvgEffect = () => {
    return <span className='w-[376px] h-[83px] absolute mt-2 bg-red-300 z-10'>
        <span className='w-fill h-fit absolute  right-0 -translate-y-3 -translate-x-3'>
        <Image 
        src={svgVerticals}
        alt="vertical svg" 
        />
        </span>
        <span className='w-[332px] h-[46px] absolute bottom-8 right-0'>
            <h1 className='text-white text-[42px] font-normal'>About Us</h1>
        </span>
    </span>
}

export default SvgEffect