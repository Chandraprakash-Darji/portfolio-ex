import "./About.css";
// prettier-ignore
import AppIcons from "../../assets/AppIcons";
import AnimatedText from "../AnimatedText";
const About = () => {
    return (
        <section id="aboutme" className="container mx-auto md:mt-36 xl:mt-72">
            <div className="flex justify-center items-center">
                <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl  py-5 relative before:content-['<h2>'] before:text-mainDark after:content-['</h2>'] after:text-mainDark before:text-base lg:before:text-xl after:text-base lg:after:text-xl before:absolute before:right-full before:top-0 after:absolute after:bottom-3 after:left-full after:font-sans after:not-italic after:font-normal before:not-italic before:font-normal before:font-sans font-bold italic font-Hack">
                    {Array.from("About_Me").map((char, i) => (
                        <span key={i} className="headingChar inline-block">
                            {char}
                        </span>
                    ))}
                    {/* About Me */}
                </h2>
            </div>
            <div className="flex flex-col lg:flex-row mt-10 gap-x-10 xl:gap-x-16 gap-y-10">
                <div className=" flex-1 text-xl fony-bold flex flex-col gap-6 p-3 pb-10 pl-10">
                    <h3 className="relative -left-8 text-2xl md:text-4xl font-bold italic font-sans before:content-['<h2>'] before:text-mainDark after:content-['</h2>'] after:text-mainDark before:text-base md:before:text-lg  after:text-base md:after:text-lg  after:font-sans after:not-italic after:font-normal before:not-italic before:font-normal before:font-sans">
                        {" "}
                        <AnimatedText text="Hii " />
                        <AnimatedText
                            text="👋 "
                            className="not-italic"
                            delay={20}
                        />
                        <AnimatedText text="I'am " delay={30} />
                        <AnimatedText
                            delay={50}
                            text="Chandraparakash "
                            className="text-primary"
                        />
                        ,
                    </h3>
                    <p className="relative before:content-['<p>'] before:text-mainDark before:text-lg before:not-italic before:font-normal before:font-sans before:absolute before:-left-8">
                        <br />I am here to showcase my skills and present
                        myself. For the last 9 months, I have been working on my
                        skills while I am in college. In the first semester of
                        my college, there was the subject
                        <span className="text-primary">
                            {" "}
                            *Web Technologies*
                        </span>
                        .
                    </p>
                    <p>
                        I was very amazed when I created my first website, It
                        was a Burger King clone. After that, I started working
                        on my skills in HTML5, CSS, JavaScript, etc. and kept
                        going.
                    </p>
                    <p>
                        Now I have the following skills and desire to learn
                        more. I am looking forward to learn about Blockchain,
                        Solidity, and Smart Contracts.
                    </p>
                    <p className="relative after:content-['</p>'] after:text-mainDark after:text-lg  after:font-sans after:not-italic after:font-normal after:absolute after:-left-8">
                        Now I am working on making my{" "}
                        <span className="text-primary">portfolio </span> better
                        and <span className="text-primary">freelancing</span>. I
                        would like to work with you{" "}
                        <a href="#contact" className="text-primary">
                            *Contact*
                        </a>
                        <br />
                    </p>
                </div>
                <div className="flex-1 select-none p-3 ">
                    <AnimatedText
                        as="h3"
                        text=" Langauge and Tools "
                        className="relative text-2xl md:text-4xl font-bold italic font-sans before:content-['<h2>'] before:text-mainDark after:content-['</h2>'] after:text-mainDark before:text-base md:before:text-lg  after:text-base md:after:text-lg  after:font-sans after:not-italic after:font-normal before:not-italic before:font-normal before:font-sans"
                    />

                    <div className="mt-5 p-3 pl-0">
                        <ul className="flex flex-wrap gap-7">
                            {AppIcons.map(({ key, path, name }) => (
                                <li
                                    key={key}
                                    className="bg-primary/20 p-4 hover:bg-main/5 flex justify-center items-center rounded-xl border border-primary/70 hover:border-primary/50 shadow-md shadow-main/20 hover:shadow-none
                                    "
                                    title={name}
                                >
                                    <img
                                        className="w-14 md:w-20 aspect-auto "
                                        src={path}
                                        alt={name}
                                        draggable="false"
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
