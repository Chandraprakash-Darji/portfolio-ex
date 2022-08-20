import AppIcons from "../../assets/Icons";
import useElementOnSecreen from "../../hook/useElementOnSecreen";
import Heading2 from "../Dumb/Heading2";

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
                <Heading2 text="About_Me" />
            </div>
            <div className="flex flex-col lg:flex-row mt-10 gap-x-10 xl:gap-x-16 gap-y-10">
                <InfoSection />
                <LangaugeAndTools />
            </div>
        </section>
    );
};

export default About;

function InfoSection() {
    return (
        <div className=" flex-1 text-lg md:text-xl fony-bold flex flex-col gap-6 p-3 pb-10 pl-10">
            <h3 className="relative -left-8 text-2xl md:text-4xl font-bold italic font-Roboto tracking-wide before:content-['<h2>'] before:text-mainDark after:content-['</h2>'] after:text-mainDark before:text-base md:before:text-lg  after:text-base md:after:text-lg after:not-italic after:font-normal before:not-italic before:font-normal ">
                {" "}
                Hii
                <span className="not-italic"> 👋 </span>
                I'am <span className="text-primary">Chandraparakash </span>,
            </h3>
            <p className="relative before:content-['<p>'] before:text-mainDark before:text-lg before:not-italic before:font-normal before:font-sans before:absolute before:-left-8">
                <br /> I am a self-taught Developer and a person who loves to
                learn new things. I have been working on my skills for 1 year
                now. I started with the subject
                <span className="text-primary"> Web Technologies</span>, which
                was one of the most interesting subject for me.
            </p>
            <p>
                While learning the subject I was creating websites, Burger King
                clone is one of it After that, I moved on to master the HTML5,
                CSS, JavaScript, NodeJS, and React.
            </p>
            <p>
                Now I have the following skills and desire to learn more. I am
                looking forward to learn about Blockchain, Solidity, and Smart
                Contracts.
            </p>
            <p className="relative after:content-['</p>'] after:text-mainDark after:text-lg  after:font-sans after:not-italic after:font-normal after:absolute after:-left-8">
                Now I am working on making my{" "}
                <span className="text-primary">portfolio </span> better and{" "}
                <span className="text-primary">freelancing</span>. I would like
                to work with you{" "}
                <a href="#contact" className="text-primary hover:underline">
                    Contact
                </a>
                <br />
            </p>
        </div>
    );
}

function LangaugeAndTools() {
    return (
        <div className="flex-1 select-none p-3 ">
            <h3 className="relative text-2xl md:text-4xl font-bold italic font-Roboto tracking-wide before:content-['<h2>'] before:text-mainDark after:content-['</h2>'] after:text-mainDark before:text-base md:before:text-lg  after:text-base md:after:text-lg  after:font-sans after:not-italic after:font-normal before:not-italic before:font-normal before:font-sans">
                {" "}
                Langauge and
                <span className="text-primary"> Tools</span>{" "}
            </h3>

            <div className="mt-5 p-3 pl-0">
                <ul className="flex flex-wrap justify-center gap-7">
                    {AppIcons.map(({ key, path, name }) => (
                        <ToolIcon key={key} path={path} name={name} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

type ToolIconProps = {
    name: string;
    path: string;
};

function ToolIcon({ name, path }: ToolIconProps) {
    return (
        <li
            className="bg-primary/20 p-4 hover:bg-main/5 flex justify-center items-center rounded-xl border border-primary/70 hover:border-primary/50 shadow-md shadow-main/20 hover:shadow-none"
            title={name}
        >
            <img
                className="w-14 md:w-20 aspect-auto "
                src={path}
                alt={name}
                draggable="false"
            />
        </li>
    );
}
