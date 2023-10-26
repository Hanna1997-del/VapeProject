"use client"

import { products ,image } from '@/Data/data'
import { Disclosure } from '@headlessui/react'
import {FaChevronDown} from 'react-icons/fa'
import Image from 'next/image'
import React from 'react'
import Product from '@/components/Product'


export default function page() {
  return (
    <main  className='w-screen h-screen'>
       <div className='w-[1440px] h-[896px] flex ml-[100px] mt-24  '>
       <div className='w-[648px] '>
                
                <div className='w-[554px] h-[756px]'>
                <Image src={products[1].img}  width={554} height={457} alt='productImg' />
                <div className='w-[554px] grid grid-cols-4 mt-7'>
                   {image.map(img =>(
                    <Image src={img.img} width={112} height={113} alt='img'/>
                   ))}
                </div>
            </div>
          
           
      
    </div>
    <div className='w-[584px] h-[896px] mt-36 flex flex-col gap-4 mr-8'>
         <h3 className='text-4xl font-bold'>{products[1].title}</h3>
       <div className='flex gap-2'>
       <p className='text-sm font-normal line-through ml-28'>{products[1].discount}MMK </p>
         <span className='text-sunset text-sm font-normal '>{products[1].percentage}%Off</span>
       </div>
         <h3 className='text-3xl ml-20'>{products[1].price}MMK</h3>
         <button className='bg-sunset text-white w-[156px] h-[41px] rounded-lg ml-20'>Add to Cart</button>
         <div className="w-[384px] px-4 pt-16 relative">
  <div className="mx-auto w-[384px] max-w-md rounded-2xl bg-white p-2 absolute top-16 right-6 ">
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-[384px] justify-between px-2 py-2 text-sm font-medium underline ">
            <span className='text-2xl font-normal'>Description</span>
            <FaChevronDown
              className={`${
                open ? 'rotate-180 transform' : ''
              } h-5 w-5 text-black font-bold text-4xl`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-2 pt-4 pb-2 text-sm text-black">
          E-cigarettes heat nicotine (extracted from tobacco), flavorings and other chemicals to create an
           aerosol that you inhale. Regular tobacco cigarettes contain 7,000 chemicals, many of which are toxic.
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
   
  </div>
</div>

    </div>
       </div>

       <div className='w-[1440px] h-[679px] bg-black overflow-y-hidden mt-10 '>
         <div className='ml-[100px] pt-36 '>
         <h3 className='text-white text-4xl font-bold'>You May Also Like</h3>
         <div className='mt-36 text-white mb-10'>
         <Product  />
         </div>
         </div>
          
       </div>
        
    </main>
  )
}
