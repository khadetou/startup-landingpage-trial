import { FC } from 'react';
import ServiceThumb from '/public/assets/service-thumb.png';
import shapePattern from '/public/assets/shape-pattern1.png';
import Image from 'next/image';
import Smart from "/public/assets/services/smart.svg";
import Secure from '/public/assets/services/secure.svg';
import { IoIosPlay } from 'react-icons/io';
import TextFeature from 'components/text-feature';



const data = {
    subTitle: "our services",
    title: "Business Goals Achieved with Design",
    features: [
        {
            id: 1,
            imgSrc: Smart,
            altText: "Smart Features",
            title: "Smart Features",
            text: "Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.",
        },
        {
            id: 2,
            imgSrc: Secure,
            altText: "Secure Contents",
            title: "Secure Contents",
            text: "Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.",
        },
    ],
};

const ServiceSection: FC = () => {
    return (
        <section
            className="pb-[90px] sm:pb-[45px] reg:pb-[120px] 3xl:pb-[190px] "
        >
            <div className="xs:px-[30px] md:max-w-[780px] lg:max-w-[1020px] reg:max-w-[1200px] flex justify-between box-border m-0 min-w-0 w-full mx-auto max-w-full px-5">
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
                    className="w-full md:w-[315px] md:mb-0 md:text-left md lg:w-[390px] reg:w-[450px] xl:w-[450px] 3xl:w-[500px] shrink-0 mb-7 sm:mb-[60px]  text-center "
                >
                    <TextFeature subtitle={data.subTitle} title={data.title} />
                    <div
                        className="box-border m-0 min-w-0 grid gap-y-[35px] gap-x-0 mx-auto w-full grid-cols-1 pt-[10px] px-[10px] xs:px-0 xs:w-[370px] sm:w-[420px] md:w-full lg:pr-[30px] lg:pt-[15px] lg:gap-y-[50px] lg:gap-x-0 reg:pr-[70px]"
                    >
                        {
                            data.features.map((feature) => (
                                <div
                                    key={feature.id}
                                    className="flex items-start transition-all duration-[0.3s] m-0 min-w-0 box-border"
                                >
                                    <Image src={feature.imgSrc} alt={feature.altText} />

                                    <div className="w-full flex flex-col text-left -mt-[5px]"
                                    >
                                        <h2
                                            className="text-[18px] text-heading leading-[1.4] font-bold mb-[10px] sm:mb-[15px] md:mb-[10px] lg:mb-[15px] ml-5"
                                        >
                                            {feature.title}
                                        </h2>
                                        <p
                                            className="text-[15px] lg:text-[14px] reg:text-[15px] ml-5 font-normal leading-[1.9]"
                                        >{feature.text}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceSection;
