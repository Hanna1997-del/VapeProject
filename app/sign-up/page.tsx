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
          <h3 className="font-bold text-[24px] mb-[32px]">
            Sign Up for an Account
          </h3>
          <div className="w-full flex flex-col gap-[16px] mb-[49px]">
            <FormInput icon={<FiUser />} label="Username" />
            <FormInput icon={<HiOutlineMail />} label="Email" type="email" />
            <FormInput
              icon={<MdLockOutline />}
              label="Password"
              type="password"
            />
          </div>
          <button className="w-full h-[56px] bg-black rounded-[12px] text-white mb-[32px]">
            Sign Up
          </button>
          <div className="w-full flex justify-center gap-2">
            Already have an account?
            <Link href="/login" className="text-blue-600 font-bold">Log In</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
