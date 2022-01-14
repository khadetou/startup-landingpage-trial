import Link from "next/link";
import { FC } from "react";
import Image from 'next/image';


interface LogoProps {
    src: string;

}
const Logo: FC<LogoProps> = ({ src }) => {
    return (
        <Link href="/">
            <div className="flex cursor-pointer mr-[15px]">
                <Image src={src} alt="nextjs-landing" />
            </div>
        </Link>
    )
}

export default Logo;
