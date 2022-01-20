import { FC } from "react";
import Image from 'next/image';

interface FeatureCardProps {
    src: string;
    altText: string;
    title: string;
    text: string;
}
const FeatureCard: FC<FeatureCardProps> = ({
    src,
    altText = "default alt text",
    title,
    text
}) => {
    return (
        <div className="flex items-start -mb-[5px]">
            <div className="max-w-full w-[70px] h-auto flex-shrink-0 mr-[10px] ml-[-10px] xs:mr-[15px] md:w-[80px] lg:mr-[20px] lg:w-[90px] reg:w-auto reg:mr-[25px]">
                <Image src={src} alt={altText} />
            </div>

            <div className="w-full flex flex-col -mt-[5px]">
                <h2 className="font-bold leading-[1.4] text-heading font-base -trackin-[0.55px] xs:font-[18px] sm:mb-[15px] ">{title}</h2>
                <span
                    className="font-[15px] leading-[1.9] font-normal xs:font-[15px]"
                >{text}</span>
            </div>
        </div>
    );
}

export default FeatureCard;
