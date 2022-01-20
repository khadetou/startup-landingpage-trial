import FeatureCard from "components/feature-card";
import SectionHeader from "components/section-header";
import { FC } from "react";
import Partnership from '/public/assets/feature/partnership.svg';
import Performance from '/public/assets/feature/performance.svg';
import Subscription from '/public/assets/feature/subscription.svg';
import Support from '/public/assets/feature/support.svg';


const data = [
    {
        id: 1,
        imgSrc: Performance,
        altText: "Fast Performance",
        title: "Fast Performance",
        text: "Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.",
    },
    {
        id: 2,
        imgSrc: Partnership,
        altText: "Pro Subscription",
        title: "Pro Subscription",
        text: "We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.",
    },
    {
        id: 3,
        imgSrc: Subscription,
        altText: "Partnership deal",
        title: "Partnership deal",
        text: "Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.",
    },
    {
        id: 4,
        imgSrc: Support,
        altText: "Customer Support",
        title: "Customer Support",
        text: "We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.",
    },
];

const Feature: FC = () => {
    return (
        <section className="pb-[80px] sm:mb-[100px] reg:mb-[120px] 3xl:pb-[170px]">
            <div
                className="px-5 max-w-full mx-auto w-full xs:px-[30px] md:maw-w-[780px] lg:maw-w-[1020px]  reg:max-w-[1200] 3xl:max-w-[1310px]"
            >
                <SectionHeader
                    slogan="Quality features"
                    title="Amazing useful features"
                />
                <div
                    className="grid gap-x-0 gap-y-10 grid-cols-1 px-[25px] xs:px-[30px] sm:px-0 sm:gap-y-[45px] sm:gap-x-[30px] lg:px-[50px] lg:gap-y-[60px] lg:gap-x-[50px] reg:px-[80px] reg:gap-y-[70px] reg:gap-x-[80px] xl:px-[50px] xl:pt-[10px] 3xl:gap-y-[80px] 3xl:gap-x-[90px]"
                >
                    {
                        data.map((item) => (
                            <FeatureCard
                                key={item.id}
                                src={item.imgSrc}
                                altText={item.altText}
                                title={item.title}
                                text={item.text}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Feature;