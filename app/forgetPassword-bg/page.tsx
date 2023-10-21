import { cn } from '@/lib/utils'
import Image from '@/components/Image'
import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import Link from 'next/link';
import FormInput from '@/components/Form/FormInput'

export default function page() {
  return (
    <main className={cn("w-screen h-screen overflow-y-auto", "grid grid-cols-2")}>
       <div className="image-container h-screen overflow-hidden">
        <Image src="/images/login-image.png" alt="login image" />
      </div>
        <div className={cn("flex flex-col justify-center items-center" , "w-full h-full")}>
            <div className='w-[404px]'>
                <h3 className='font-bold text-[24px] mb-[32px]'>Reset your password</h3>
                <p className='text-[15px] text-light-gray mb-[32px]'>Enter the Email address associated with your account and we will send you a link to reset
                    your password
                </p>
                <div className='mb-[49px]'>
                <FormInput icon={<HiOutlineMail />} label='Email' type='email'/>
                </div>
                <button className="w-full h-[56px] bg-black rounded-[12px] text-white mb-[32px]">
            Continue
          </button>
         <div className='text-center'>
         <Link href="/login" className="text-blue-600 font-bold ">Back to Sign In</Link>
         </div>

         <div className="w-full flex justify-center gap-2 mt-[243px]">
            Don’t have an account?
            <Link href="/sign-up" className="text-blue-600 font-bold">
              Sign Up
            </Link>
          </div>
            </div>
        </div>
    </main>
  )
}
