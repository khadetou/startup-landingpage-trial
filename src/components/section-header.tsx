import { FC } from "react";

interface SectionHeaderProps {
    title?: string;
    slogan?: string;
    isWhite?: boolean;
}
const SectionHeader: FC<SectionHeaderProps> = ({ title, slogan, isWhite }) => {
    return (
        <div
            className="w-full sm:w-[540px] flex flex-col items-center -mt-[3px] sm:-mt-[5px] sm:mb-[60px] reg:mb-[65] m-0 min-w-0  mx-auto"
        >
            <p
                className={`${isWhite ? 'text-white opacity-[0.7]' : "text-secondary opcity-[1]"}
                 xs:text-[13px] sm:tracking-[2px] 
                 md:text-[14px] box-border m-0 min-w-0 tracking-[1.5px] text-[12px] text-center uppercase font-bold mb-[10px] leading-[1.5] opacity-100
                `}
            >
                {slogan}
            </p>
            <h2
                className="sm:text-[28px] md:leading-[1.25] reg:text-[32px] box-border m-0 min-w-0 font-bold leading-[1.5] font-[20px] text-center text-primary tracking-[-0.5px] opacity-100"
            >{title}</h2>
        </div>
    )
}

export default SectionHeader;
