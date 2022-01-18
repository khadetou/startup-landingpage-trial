import FeatureCardColumn from "components/feature-card-column";
import SectionHeader from "components/section-header";
import { FC } from "react";
import { keyfeatureDate } from "./data";
const KeyFeatures: FC = () => {
    return (
        <section
            className="sm:py-[100px] reg:py-[120px] pt-[80px] pb-[90px]"
            id="features">
            <div
                className="xs:px-[30px] md:max-w-[780px] lg:max-w-[1020px] reg:max-w-[1200px] box-border m-0 min-w-0 w-full mx-auto max-w-full px-5"
            >
                <SectionHeader
                    slogan="What's the function"
                    title="Meet the feature of our product"
                />
                <div
                    className="xs:w-4/5 sm:w-full sm:gap-10 sm:grid-cols-2 md:gap-x-[60px] md:gap-y-[50px] lg:gap-[30px] lg:grid-cols-4 reg:gap-y-[50px] reg:gap-x-10 xl:gap-y-[55px] xl:gap-x-[90px] box-border m-0 min-w-0 grid gap-y-[35px] gap-x-0 w-ful mx-auto  grid-cols-1"
                >
                    {
                        keyfeatureDate.map((item) => (
                            <FeatureCardColumn
                                key={item.id}
                                title={item.title}
                                src={item.imgSrc}
                                text={item.text}
                                altText={item.altText}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default KeyFeatures;
