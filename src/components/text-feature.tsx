import { FC } from "react"
import Link from "next/link";
interface TextFeatureProps {
    subtitle: string;
    title: string;
    description?: string;
    btnName?: string;
    btnLink?: string;
}
const TextFeature: FC<TextFeatureProps> = ({ subtitle, title, description, btnName, btnLink = "#" }) => {
    return (
        <div
            className="flex w-full items-start flex-col shrink-0"
        >
            <div
                className="w-full flex flex-col -mt-[5]"
            >
                <p
                    className="text-[14px] sm:text-[15px] text-secondary uppercase font-bold mb-[10px] xs:mb-[15px] leading-[1.5] tracking-[1.5px] sm:tracking-[2px]"
                >{subtitle}</p>
                <h2
                    className="text-[24px]  sm:text-[28px] md:text-[30px] lg:text-[36px] reg:text-[42px] 3xl:text-[48px] text-heading font-bold mb-[15px] leading-[1.3] lg:leading-[1.2]  -tracking-[0.5px]"
                >{title}</h2>
            </div>
            {
                description &&
                (<p
                    className="text-[15px] xs:text-base reg:text-[17px] 2xl:text-[18px] font-normal leading-[1.85] md:leading-[2] lg:leading-[2.2] text-tsecondary mb-[30px]"
                >
                    {description}
                </p>)
            }
            {
                btnName &&
                (
                    <Link href={btnLink}>
                        <button
                            aria-label={btnName}
                        >
                            {btnName}
                        </button>
                    </Link>
                )
            }
        </div>
    )
}

export default TextFeature
