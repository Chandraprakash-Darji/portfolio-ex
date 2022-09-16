import { BelowLine, InfoSection, LangaugeAndTools } from '.';
import useElementOnSecreen from '../../hook/useElementOnSecreen';
import AnimatedText from '../AnimatedText';
import Heading2 from '../Dummy/Heading2';
import './About.css';
const About = () => {
    const [isVisible, containerRef] = useElementOnSecreen();

    return (
        <section
            id="aboutme"
            ref={containerRef}
            className={`container relative mx-auto mt-10 transition-all duration-500 ease-linear md:mt-36 xl:mt-72 ${
                isVisible ? 'translate-x-0' : 'translate-y-36 opacity-0'
            }`}
        >
            <div className="flex items-center justify-center">
                <Heading2>
                    {isVisible ? (
                        <AnimatedText text="Something About Me" />
                    ) : (
                        ''
                    )}
                </Heading2>
            </div>
            <div className="mt-10 flex flex-col gap-x-10 gap-y-10 lg:flex-row xl:gap-x-16">
                <InfoSection />
                <LangaugeAndTools />
            </div>

            <div className="absolute left-1/2 hidden -translate-x-4 lg:-bottom-[13rem] lg:block ">
                <BelowLine />
            </div>
        </section>
    );
};

export default About;
