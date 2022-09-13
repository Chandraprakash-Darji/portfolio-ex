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
      className={`min-h-[30rem] transition-all duration-500 ease-linear container  mt-10 lg:mt-[21rem] mx-auto ${
        isVisible ? "pt-0" : "opacity-0 pt-36"
      }`}
    >
      <div className="flex justify-center items-center">
        <Heading2>
          {isVisible ? <AnimatedText text="Connect with Me" /> : ""}
        </Heading2>
      </div>
      <SocialWrapper />
      <div className="flex justify-center gap-2 text-xl">
        <span>Sponser me on Github</span>
        <iframe
          src="https://github.com/sponsors/Chandraprakash-Darji/button"
          title="Sponsor Chandraprakash-Darji"
          height="35"
          width="116"
          style={{ border: 0 }}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
