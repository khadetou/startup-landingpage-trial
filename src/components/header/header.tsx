import { FC } from "react"
import LogoImage from '/public/assets/logo.svg';
import Logo from 'components/Logo';
import { Link } from 'react-scroll';
import { menueItems } from './data'
interface HeaderProps {
    className?: any;
}

const Header: FC<HeaderProps> = ({ className }) => {
    return (
        <header className={`text-primary font-body font-normal py-5 w-full absolute min-w-0 top-0 left-0 bg-transparent transition-all ease-in duration-[0.4s] animate-positionAnim ${className}`}>
            <div className="flex justify-between items-center max-w-full w-full px-5 xs:px-[30px] md:max-w-[780px] lg:max-w-[1020px] reg:max-w-[1200px] 3xl:max-w-[1310px] mx-auto">
                <Logo src={LogoImage} />
                <nav className="mx-auto hidden lg:block nav ">
                    {
                        menueItems.map((menueItem, index) => (
                            <Link
                                key={index}
                                activeClass="active"
                                to={menueItem.path}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                {menueItem.label}
                            </Link>
                        ))
                    }
                </nav>
                <button
                    className="box-border m-0 min-w-0 inline-block text-center px-[15px] py-[10px] text-secondary rounded-full font-body font-medium transition-all duration-[0.25s] border-2 border-secondary shrink-0 background-transparent hover:bg-secondary hover:text-white focus:outline-none lg:mx-0 xs:mr-5 md:text-base sm:py-[15px] sm:px-[30px]"
                    aria-label="Get Started">Get Started</button>
            </div>
        </header>
    )
}

export default Header
