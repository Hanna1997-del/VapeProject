"use client";
import React from 'react'
import { products } from '@/Data/data';
import {AiFillStar} from "react-icons/ai"


import Image from 'next/image'




export default function Product() {
  return (
    <div className='w-[950px] grid grid-cols-4 mt-10 gap-2'>
    {products.map(product =>(
        <div className=' relative '>
            <Image src={product.img} className='shadow-xl border border-gray rounded-xl' alt="product" width={178} height={178} />
             <div className='ml-10 mt-6 mb-16'>
             <h3 >{product.title}</h3>
            <p className='ml-3'>{product.price} MMK</p>
            <p className='text-sm ml-3 line-through '>{product.discount}MMK</p>
            <div className='flex w-full h-8  items-center ml-3'>
            <p className='text-gold'><AiFillStar /></p>
            <p className='text-sm '>{product.points} Points</p>
            </div>
             </div>
            <div className='absolute top-0 left-12'>
                <p className='bg-sunset text-white w-[72px] h-[21px] text-sm text-center'>{product.percentage}% Off</p>
            </div>
        </div>
       
    ))}
      </div>
  )
}



