import { cn } from '@/lib/utils'
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from 'next/link';
import FormInput from '@/components/Form/FormInput';
import { HiOutlineMail } from "react-icons/hi";
import React from 'react'

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
            <div className='max-w-[502px] h-[450px] bg-pure-white rounded-lg'>
                <h3 className='font-bold text-[24px] mb-[10px] text-center mt-5 '>Reset your password</h3>
                <p className='text-[15px] text-light-gray  p-8'>Enter the Email address associated with your account and we will send you a link to reset
                    your password
                </p>
                <div className='mb-[49px] px-8'>
                <FormInput icon={<HiOutlineMail />} label='Email' type='email'/>
                </div>
                <button className="w-[402px] h-[56px] bg-black rounded-[12px] text-white mb-[32px] mx-12">
            Continue
          </button>
         <div className='text-center '>
         <Link href="/login" className="text-blue-600 font-bold ">Back to Sign In</Link>
         </div>

        
            </div>
        </div>
        </div>
        <div className="w-full flex justify-center gap-2 mt-20">
            Don’t have an account?
            <Link href="/sign-up" className="text-blue-600 font-bold">
              Sign Up
            </Link>
          </div>
    </main>
  )
}
