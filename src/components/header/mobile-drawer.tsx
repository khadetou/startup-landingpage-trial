import { FC } from "react"
import {
    FaFacebookF,
    FaTwitter,
    FaGithubAlt,
    FaDribbble
} from 'react-icons/fa';
import Scrollbars from 'react-custom-scrollbars-2';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { useState } from "react";
import Drawer from '../drawer';
import { menueItems } from "./data";
import { Link } from "react-scroll";


const socials = [
    {
        path: "/",
        icon: <FaFacebookF />,
    },
    {
        path: "/",
        icon: <FaTwitter />,
    },
    {
        path: "/",
        icon: <FaGithubAlt />,
    },
    {
        path: "/",
        icon: <FaDribbble />,
    },
];


const MobileDrawer: FC = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <Drawer
            width="320px"
            drawerHandler={
                <div className="flex items-center justify-center shrink-0 w-[26px] lg:hidden">
                    <IoMdMenu size="26px" />
                </div>
            }
            open={isDrawerOpen}
            toggleHandler={() => setIsDrawerOpen(!isDrawerOpen)}
            closeButton={<IoMdClose size="24px" color="#000" />}
            drawerStyle="w-full h-full"
            closeBtnStyle="flex items-center justify-center top-[25px] right-[30px] absolute z-10 cursor-pointer"
        >
            <Scrollbars autoHide>
                <div className="w-full h-full flex flex-col pt-[100px] pb-[40px] px-[30px]">
                    <div className="w-full flex flex-col menu">
                        {
                            menueItems.map((menueItem, index) => (
                                <Link
                                    activeClass="active"
                                    to={menueItem.path}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    key={index}
                                >
                                    {menueItem.label}
                                </Link>
                            ))
                        }
                    </div>
                    <div
                        className="w-full flex flex-col items-center mt-auto"
                    >
                        <div
                            className="w-full flex items-center justify-center"
                        >
                            {
                                socials.map((social, index) => (
                                    <span
                                        className="flex items-center justify-center text-primary text-[14px] mr-[15px] transition-all duration-[0.25s] cursor-pointer last:mr-0 hover:text-tertiary"
                                        key={index}
                                    >
                                        <Link to={social.path}>
                                            {social.icon}
                                        </Link>
                                    </span>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </Scrollbars>
        </Drawer>
    )
}

export default MobileDrawer
