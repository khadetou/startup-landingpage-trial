import { FC } from "react";
import Image from "next/image";

interface FeatureCardColumnProps {
    src: string;
    altText?: string;
    title: string;
    text: string;
}
const FeatureCardColumn: FC<FeatureCardColumnProps> = ({ src, altText = "default alt text", title, text }) => {
    return (
        <div
            className="flex items-center xs:items-start flex-col -mb-[5] text-center sm:text-left px-5 sm:px-0"
        >
            <div
                className="relative mx-auto sm:mx-0 mt-auto sm:mt-[-13px] mb-[-10px] w-20 md:w-[90px] reg:w-auto">
                <Image layout="fill" src={src} alt={altText} />
            </div>

            <div
                className="w-full flex flex-col"
            >
                <h2
                    className="text-[18px] leading-[1.4] font-bold mb-[10px] sm:mb-[15px] text-primary"
                >
                    {title}
                </h2>
                <p
                    className="text-[15px] font-normal leading-[1.9]"
                >
                    {text}
                </p>
            </div>
        </div>
    )
}

export default FeatureCardColumn;
