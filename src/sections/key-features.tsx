import SectionHeader from "components/section-header";
import { FC } from "react";

const KeyFeatures: FC = () => {
    return (
        <section
            className="sm:py-[100px] reg:py-[120px] pt-[80px] pb-[90px]"
            id="features">
            <SectionHeader
                slogan="What's the function"
                title="Meet the feature of our product"
            />
            <div
                className="xs:w-4/5 sm:w-full sm:gap-10 sm:grid-cols-2 md:gap-x-[60px] md:gap-y-[50px] lg:gap-[30px] lg:grid-cols-4 reg:gap-y-[50px] reg:gap-x-10 xl:gap-y-[55px] xl:gap-x-[90px] box-border m-0 min-w-0 grid gap-y-[35px] gap-x-0 w-ful mx-auto  grid-cols-1"
            >

            </div>
        </section>
    )
}

export default KeyFeatures;
