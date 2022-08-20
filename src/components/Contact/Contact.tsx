import useElementOnSecreen from "../../hook/useElementOnSecreen";
import Heading2 from "../Dummy/Heading2";
import PrimaryText from "../Dummy/PrimaryText";

const Contact = () => {
    const [isVisible, containerRef] = useElementOnSecreen();
    return (
        <div
            ref={containerRef}
            id="contact"
            className={`min-h-[30rem]transition-all duration-500 ease-linear ${
                isVisible ? "pt-0" : "opacity-0 pt-36"
            }`}
        >
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <Heading2>ConnectWithMe</Heading2>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 py-16 md:py-32">
                    <SocialButton
                        text="LinkedIn"
                        href="https://www.linkedin.com/in/chandra-prakash-6065b2224/"
                        pos={{
                            x: isVisible ? 0 : -153,
                            y: isVisible ? 0 : -160,
                        }}
                    />
                    <SocialButton
                        text="Github"
                        href="http://github.com/Chandraprakash-Darji"
                        pos={{
                            x: isVisible ? 0 : -160,
                            y: isVisible ? 0 : 153,
                        }}
                    />
                    <SocialButton
                        text="Gmail"
                        href="mailto:prakashchandra3786@gmail.com"
                        pos={{ x: isVisible ? 0 : -83, y: isVisible ? 0 : -90 }}
                    />
                    <SocialButton
                        text="Twitter"
                        href="https://twitter.com/chandra_7852"
                        pos={{ x: isVisible ? 0 : 6, y: isVisible ? 0 : 75 }}
                    />
                </div>
                <p className="text-center py-10">
                    || Design by{" "}
                    <a
                        href="https://dribbble.com/saaddesigns"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <PrimaryText className="hover:underline">
                            Saad
                        </PrimaryText>
                    </a>{" "}
                    && coded by{" "}
                    <a
                        href="http://github.com/Chandraprakash-Darji"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {" "}
                        <PrimaryText className="hover:underline">
                            Chandraprakash Darji
                        </PrimaryText>
                    </a>{" "}
                    ||
                </p>
            </div>
        </div>
    );
};

export default Contact;

type SocialButtonProps = {
    text: string;
    href: string;
    pos: { x: number; y: number };
};

const SocialButton = ({ text, href, pos: { x, y } }: SocialButtonProps) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            style={{
                transform: `translate(${x}px , ${y}px)`,
            }}
            className="transition-all duration-500"
        >
            <div className="w-32 md:w-52 aspect-square flex justify-center items-center">
                <div className="animteSize w-32 md:w-52 aspect-square border-primary border-2 rounded-full text-main relative  md:text-2xl">
                    <div className="hoverBox h-full w-full flex justify-center items-center z-50 0 cursor-pointer transition-all duration-500 absolute text-center">
                        {"<>"}
                        <br /> {text}
                        <br /> {"</>"}
                    </div>
                    {/* Box that pop */}
                    <div className="popBox absolute h-0 w-0 top-1/2 left-1/2 bg-primary -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-500 rounded-full"></div>
                </div>
            </div>
        </a>
    );
};
