import React from 'react'
import { cn } from '@/lib/utils'
import { RiArrowDropDownLine  } from "react-icons/ri";
import Link from 'next/link';
import Image from 'next/image';

export default function page() {
  return (
    <main className={cn("w-screen h-screen overflow-y-auto bg-whiter " , "flex flex-col ")}>
    <div className='w-[1276px] h-[48px] flex justify-between items-center mt-12'>
         <div className='ml-16'>
            <h3 className='text-[32px] font-bold'>Vape Project</h3>
         </div>
         <div className='mr-16 flex justify-center items-center w-[158px] h-[48px] bg-pure-white border-none '>
           <div className='text-darker-gray text-base font-semibold'><h3> English (UK) </h3></div>
           <div><RiArrowDropDownLine /></div>
         </div>
    </div>
    <div>
    <div className={cn("flex flex-col justify-center items-center mt-24" , "w-full h-full")}>
        <div className='max-w-[502px] h-[500px] bg-pure-white rounded-lg '>
        <div className='flex justify-center mt-16'>
               <Image src="/images/004.png" alt="verify" width={151} height={132}/>
            </div>
            <h3 className='font-bold text-[24px]  text-center mt-5 '>Verify your Email</h3>
           
            <p className='text-[15px] text-light-gray  py-3 px-8'>Thank you, check your email for the instructions
            to reset your password
            </p>
            
            <button className="w-[402px] h-[56px] bg-black rounded-[12px] text-white mb-[32px] mx-12 mt-8 ">
       skip Now
      </button>
     <div className='text-center w-full flex justify-center gap-2'>
       <h3 className='text-[15px] text-light-gray '> Don't receive an email?</h3>
     <Link href="/login" className="text-blue-600 font-bold ">Resend</Link>
     </div>

    
        </div>
    </div>
    </div>
   
</main>
  )
}
