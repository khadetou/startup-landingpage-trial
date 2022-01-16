import { FC } from "react";
import Image from 'next/image';
import BannerImg from '/public/assets/banner-thumb.png';



const Banner: FC = () => {
    return (
        <section className="pt-[140px] pb-[10px] xs:pt-[145px] md:pt-[170px] lg:pb-[10px] reg:pb-0 3xl:pt-[180px] relative z-10 before:absolute before:bottom-7 before:left-0 before:h-full before:w-full before:-z-10 before:bg-[url('../../public/assets/shape-left.png')]  before:bg-no-repeat before:bg-left-bottom before:bg-[length:36%]  after:absolute after:bottom-10 after:right-0 after:h-full after:w-full after:-z-10 after:bg-[url('../../public/assets/shape-right.png')] after:bg-no-repeat after:bg-right-bottom after:bg-[length:32%]" id="home">
            <div className="min-h-[inherit] flex flex-col justify-center items-center max-w-full w-full px-5 xs:px-[30px] md:max-w-[780px] lg:max-w-[1020px] reg:max-w-[1200px] 3xl:max-w-[1310px] mx-auto min-w-0">

                <div className="w-full sm:w-[535px] xs:w-[90] md:w-[535px] lg:w-[57%] reg:w-[60%] reg:mb-[50px] xl:w-[68%] text-center mx-auto box-border ">
                    <h1 className="xl:text-[58px] reg:text-[52px] reg:leading-[1.2] reg:mb-25px md:text-[40px] sm:text-[42px] xs:text-[36px] box-border m-0 min-w-0 font-bold leading-[1.3] text-[32px] mb-5 text-heading">
                        Top Quality Digital Products Explore
                    </h1>
                    <p
                        className="text-heading
                        box-border m-0 min-w-0 text-base leading-[1.9] font-normal mb-[25px] px-0 md:leading-[2] md:px-[30px] reg:text-[20px] reg:px-[80px] 2xl:text-xl 2xl:px-[100px] "
                    >
                        Check our Website to find greate software products and deals! If you need website or an application this is the place to go.
                    </p>
                    <button className="box-border m-0 min-w-0 appearance-none inline-block text-center no-underline px-[20px] py-[12px] cursor-pointer font-medium text-white bg-secondary rounded-full sm:px-[30px] sm:py-[15px] md:text-base hover:shadow-[0px_9px_20px_-5px_rgba(233,76,84,0.57)]  "
                    >
                        Explore
                    </button>
                </div>
                <div className="reg:-mb-10 sm:-mb-[30px] box-border m-0 min-w-0 mb-0 inline-flex justify-center text-center ">
                    <Image src={BannerImg} className="box-border m-0 min-w-0 max-w-0 h-auto" />
                </div>
            </div>
        </section>
    )
}

export default Banner;
