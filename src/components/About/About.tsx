import { InfoSection, LangaugeAndTools } from ".";
import useElementOnSecreen from "../../hook/useElementOnSecreen";
import AnimatedText from "../AnimatedText";
import Heading2 from "../Dummy/Heading2";

const About = () => {
    const [isVisible, containerRef] = useElementOnSecreen();

    return (
        <section
            ref={containerRef}
            id="aboutme"
            className={`container mx-auto md:mt-36 xl:mt-72 transition-all duration-500 ease-linear ${
                isVisible ? "translate-x-0" : "opacity-0 translate-y-36"
            }`}
        >
            <div className="flex justify-center items-center">
                <Heading2>
                    {isVisible ? <AnimatedText text="AboutMe" /> : ""}
                    {/* AboutMe */}
                </Heading2>
            </div>
            <div className="flex flex-col lg:flex-row mt-10 gap-x-10 xl:gap-x-16 gap-y-10">
                <InfoSection />
                <LangaugeAndTools />
            </div>
        </section>
    );
};

export default About;
