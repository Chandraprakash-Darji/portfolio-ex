import { useEffect } from "react";
import { CurveSvg, DownloadCV } from ".";
import AnimatedText from "../AnimatedText";
import "./Home.css";

const Home = () => {
    useEffect(() => {
        const NavBar = document.getElementById("navbar");
        const Home = document.getElementById("home");
        if (NavBar && Home) {
            const navheight = NavBar.getBoundingClientRect().height;
            Home.style.setProperty("--x", navheight + "px");
        }
    }, []);

    return (
        <section
            id="home"
            className="container mx-auto flex flex-col md:flex-row pt-8 md:pt-20 xl:pt-24 2xl:pt-28 lg:gap-10 select-none relative pb-20 xl:pb-32 sm:text-xl md:justify-between
            "
        >
            <div className="flex flex-col gap-3 md:gap-5 lg:gap-10 px-3">
                <AnimatedText
                    className="md:text-xl lg:text-2xl xl:text-3xl text-primary before:content-['<p>_'] before:text-mainDark after:content-['_</p>'] after:text-mainDark "
                    text="I am"
                    as={"p"}
                />
                <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-[6rem] py-10 pl-10 lg:pl-20 relative before:content-['<h1>'] before:text-mainDark after:content-['</h1>'] after:text-mainDark before:text-base lg:before:text-3xl after:text-base lg:after:text-3xl before:absolute before:left-5 lg:before:left-10 before:top-3 lg:before:top-0 after:absolute after:bottom-3 lg:after:bottom-0  after:left-5 lg:after:left-10 leading-[1.1] after:font-sans after:not-italic after:font-normal before:not-italic before:font-normal before:font-sans font-bold italic font-RobotoCondensed tracking-wide magic-spaceInUp">
                    Chandra
                    <span className="hidden md:inline">
                        <br />
                    </span>
                    Prakash Darji
                </h1>
                <AnimatedText
                    as="p"
                    className="md:text-xl lg:text-2xl xl:text-3xl text-primary before:content-['<p>'] before:text-mainDark after:content-['</p>'] after:text-mainDark "
                    text={" Frontend Developer // UI Designer "}
                />
            </div>
            <DownloadCV />
            <CurveSvg />
        </section>
    );
};

export default Home;
