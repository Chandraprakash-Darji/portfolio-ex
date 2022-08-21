import { Footer, SocialWrapper } from ".";
import useElementOnSecreen from "../../hook/useElementOnSecreen";
import AnimatedText from "../AnimatedText";
import Heading2 from "../Dummy/Heading2";

const Contact = () => {
    const [isVisible, containerRef] = useElementOnSecreen();
    return (
        <div
            ref={containerRef}
            id="contact"
            className={`min-h-[30rem] transition-all duration-500 ease-linear container mt-[21rem] mx-auto ${
                isVisible ? "pt-0" : "opacity-0 pt-36"
            }`}
        >
            <div className="flex justify-center items-center">
                <Heading2>
                    {isVisible ? <AnimatedText text="Connect with Me" /> : ""}
                </Heading2>
            </div>
            <SocialWrapper />
            <Footer />
        </div>
    );
};

export default Contact;
