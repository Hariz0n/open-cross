import { FC } from "react";

type BadgeProps = {
  text: string;
  char: string;
};

export const Badge: FC<BadgeProps> = ({ char, text }) => {
  return (
    <div className="p-1 pr-2 rounded-xl flex items-center gap-2 bg-our-light-blue">
      <div className="h-8 w-8 rounded-lg bg-our-blue text-our-white flex items-center justify-center text-[18px] leading-5">{char}</div>
      <span className="text-our-blue font-semibold text-[14px] leading-5">{text}</span>
    </div>
  );
};
