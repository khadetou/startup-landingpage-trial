import { FC } from 'react';
import ServiceThumb from '/public/assets/service-thumb.png';
import shapePattern from '/public/assets/shape-pattern1.png';
import Image from 'next/image';
import { IoIosPlay } from 'react-icons/io';
const ServiceSection: FC = () => {
    return (
        <section
            className="pb-[90px] sm:pb-[45px] reg:pb-[120px] 3xl:pb-[190px] "
        >
            <div className="xs:px-[30px] md:max-w-[780px] lg:max-w-[1020px] reg:max-w-[1200px] box-border m-0 min-w-0 w-full mx-auto max-w-full px-5">
                <div
                    className="mr-auto md:mr-[30px] md:ml-0 lg:mr-[60px] md:order-[0] reg:mr-[85px] box-border m-0 min-w-0 order-2 inline-flex relative"
                >
                    <Image src={ServiceThumb} alt="Thumbnail" />
                    <button
                        className="z-10 absolute left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2 w-[60px] sm:w-20 lg:w-[100px] h-[60px] sm:h-20 lg:h-[100px] p-0 bg-transparent before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:block before:w-[60px] before:sm:w-[80px] before:lg:w-[100px]  before:h-[60px] before:sm:h-[80px] before:lg:h-[100px] before:bg-secondary before:rounded-full before:animate-pulsePlay before:opacity-50"
                    >
                        <span
                            className="bg-white/50 w-[inherit] h-[inherit] text-center rounded-full opacity-100 cursor-pointer transition-all duration-[0.5s] flex justify-center items-center relative z-10 text-white text-[40px] lg:text-[62px] sm:text-[48px] "
                        >
                            <IoIosPlay />
                        </span>
                    </button>
                    <div
                        className="reg:inline-block absolute -z-10  box-border m-0 min-w-0 -bottom-[68px] -left-[160px] hidden"
                    >
                        <Image src={shapePattern} alt="shape" />
                    </div>
                </div>

                <div
                    className="w-full lg:w-[315px] reg:w-[390px] xl:w-[450px] 3xl:w-[500px] shrink-0 mb-7 sm:mb-[60px] md:mb-0 text-center lg:text-left"
                >

                </div>
            </div>
        </section>
    )
}

export default ServiceSection;
