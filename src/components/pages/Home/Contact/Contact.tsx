import { Footer, SocialWrapper } from ".";
import useElementOnSecreen from "../../../../lib/hooks/useElementOnSecreen";
import AnimatedText from "../../../widget/AnimatedText";
import Heading2 from "../../../widget/Headings/Heading2";

const Contact = () => {
  const [isVisible, containerRef] = useElementOnSecreen();
  return (
    <div
      ref={containerRef}
      id="contact"
      className={`container mx-auto mt-10 min-h-[30rem] transition-all  duration-500 ease-linear lg:mt-[21rem] ${
        isVisible ? "pt-0" : "pt-36 opacity-0"
      }`}
    >
      <div className="flex items-center justify-center">
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
