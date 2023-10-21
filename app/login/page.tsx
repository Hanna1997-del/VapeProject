import FormInput from "@/components/Form/FormInput";
import Image from "@/components/Image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FiUser } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { MdLockOutline } from "react-icons/md";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return (
    <main
      className={cn("w-screen h-screen overflow-y-auto", "grid grid-cols-2")}
    >
      <div className="image-container h-screen overflow-hidden">
        <Image src="/images/login-image.png" alt="login image" />
      </div>
      <div
        className={cn(
          "flex flex-col justify-center items-center",
          "w-full h-full "
        )}
      >
        <div className={cn("w-[404px]")}>
          <h3 className="font-bold text-[24px]">Sign In to your Account</h3>
          <p className="text-[14px] font-light mb-[32px] text-darker-gray">
            Welcome back! please enter your detail
          </p>
          <div className="w-full flex flex-col gap-[16px] mb-[49px]">
            <FormInput icon={<HiOutlineMail />} label="Email" type="email" />
            <FormInput
              icon={<MdLockOutline />}
              label="Password"
              type="password"
            />
            <div className="w-full flex justify-between">
              <div className="flex gap-[12px]">
                <div
                  className={cn("w-[24px] h-[24px] rounded", "border")}
                ></div>
                <label>Remember me</label>
              </div>
              <Link href="/forgetPassword-bg" className="text-blue-600 font-bold">
                Forgot Password?
              </Link>
            </div>
          </div>
          <button className="w-full h-[56px] bg-black rounded-[12px] text-white mb-[32px]">
            Sign In
          </button>
          <div className="w-full flex justify-center gap-2">
            Don’t have an account?
            <Link href="/sign-up" className="text-blue-600 font-bold">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
