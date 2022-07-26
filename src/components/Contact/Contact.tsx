import Heading2 from "../Dumb/Heading2";

const Contact = () => {
    return (
        <div id="contact" className=" min-h-[30rem]">
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <Heading2 text="Connect with me" />
                </div>
                <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 py-16 md:py-32">
                    <SocialButton
                        text="LinkedIn"
                        href="https://www.linkedin.com/in/chandra-prakash-6065b2224/"
                    />
                    <SocialButton
                        text="Github"
                        href="http://github.com/Chandraprakash-Darji"
                    />
                    <SocialButton
                        text="Gmail"
                        href="mailto:prakashchandra3786@gmail.com"
                    />
                    <SocialButton
                        text="Twitter"
                        href="https://twitter.com/chandra_7852"
                    />
                </div>
                <p className="text-center py-10">
                    || Design by{" "}
                    <a
                        className="text-primary hover:underline"
                        href="https://dribbble.com/saaddesigns"
                    >
                        Saad
                    </a>{" "}
                    && coded by{" "}
                    <a
                        className="text-primary hover:underline"
                        href="http://github.com/Chandraprakash-Darji"
                    >
                        Chandraprakash Darji
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
};

function SocialButton({ text, href }: SocialButtonProps) {
    return (
        <a href={href} target="_blank" rel="noreferrer">
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
}
