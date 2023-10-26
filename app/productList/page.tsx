import React from 'react'
import Image from 'next/image'
import { FaSearch } from "react-icons/fa";
import Product from '@/components/Product';







export default function page() {
  return (
    <main className='w-screen h-screen '>
       <div>
       <div className='w-full relative '>
            <Image src="/images/banner.png" alt="banner" width={1440} height={560}/>
        </div>
        <div className='absolute top-40 left-40 text-white flex flex-col gap-4'>
            <h3 className='text-5xl font-bold'>Find the Product </h3>
            <p className='text-2xl font-semibold'>That you need here</p>

            <div className='flex gap-2 mt-16'>
                <input type="text" placeholder='Search' className='p-2 rounded-lg text-darker-gray outline-none' />
                <button type="submit" className='w-10 h-10 bg-sunset text-whiter rounded-md p-2'><FaSearch className="w-5 h-5" /></button>
            </div>
        </div>
       </div>

       <div className='max-w-[1440px] h-[640px] flex '>
         <div className='w-[466px] h-[328px]  '>
            
        
         <div className='shadow-2xl  flex flex-col items-center w-[320px] h-[328px] mt-10 ml-5 gap-5 rounded-lg'>
         <h3 className='text-2xl font-bold mt-2'>Category</h3>
            <ul className='text-xl font-normal flex flex-col gap-3'>
                <li> One Time Use</li>
                <li> Pods</li>
                <li> Disposable</li>
                <li> Devices</li>
                <li> Refills</li>
            </ul>
         </div>
          
         </div>
         <Product  />
       </div>
    </main>
  )
}
