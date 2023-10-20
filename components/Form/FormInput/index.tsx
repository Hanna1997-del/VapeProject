"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useState } from "react";
import { FiEye, FiEyeOff, FiUser } from "react-icons/fi";

interface FormInputProps {
  label: string;
  type?: string;
  icon: ReactNode;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type = "text",
  icon,
}) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className={cn(
        "flex items-center gap-[18px]",
        "w-full h-[56px] border relative",
        "rounded-[12px] p-[16px] box-border"
      )}
    >
      <div className="text-darker-gray">{icon}</div>
      <input
        className={cn("w-full", "outline-none")}
        type={type == "password" ? (show ? "text" : "password") : type}
        placeholder={label}
      />
      {type == "password" && (
        <button
          className="absolute right-[16px] text-darker-gray"
          onClick={() => setShow((show) => !show)}
        >
          {show ? <FiEye /> : <FiEyeOff />}
        </button>
      )}
    </div>
  );
};

export default FormInput;
