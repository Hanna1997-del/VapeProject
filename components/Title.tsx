import { ReactNode } from "react";

interface TitleProps {
    title: string | ReactNode | ReactNode[];
    subTitle: string;
}

const Title: React.FC<TitleProps> = ({title, subTitle}) => {
  return (
    <>
      <h3 className="font-bold text-[45px]">{title}</h3>
      <p className="text-[20px] mb-[30px]">{subTitle}</p>
    </>
  );
};

export default Title;
