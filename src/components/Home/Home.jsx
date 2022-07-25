import React, { useEffect } from "react";
import "./Home.css";
import AnimatedText from "../AnimatedText";

const Home = () => {
    useEffect(() => {
        const NavBar = document.getElementById("navbar");
        const Home = document.getElementById("home");
        const navheight = NavBar.getBoundingClientRect().height;
        Home.style.setProperty("--x", navheight + "px");
    }, []);

    return (
        <section
            id="home"
            className="container mx-auto flex flex-col md:flex-row pt-8 md:pt-20 lg:gap-10 select-none relative pb-16 lg:pb-0 sm:text-xl md:justify-between
            min-h-[calc(100vh_-_var(--x))]"
        >
            <div className="flex flex-col gap-3 md:gap-5 lg:gap-10 px-3">
                <AnimatedText
                    classname="md:text-xl lg:text-2xl xl:text-3xl text-primary before:content-['<p>_'] before:text-mainDark after:content-['_</p>'] after:text-mainDark "
                    text="I am"
                    as={"p"}
                />
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-[6rem] py-10 pl-10 lg:pl-20 relative before:content-['<h1>'] before:text-mainDark after:content-['</h1>'] after:text-mainDark before:text-base lg:before:text-3xl after:text-base lg:after:text-3xl before:absolute before:left-5 lg:before:left-10 before:top-3 lg:before:top-0 after:absolute after:bottom-3 lg:after:bottom-0  after:left-5 lg:after:left-10 leading-[1.1] after:font-sans after:not-italic after:font-normal before:not-italic before:font-normal before:font-sans magic-vanishIn font-bold italic font-Hack">
                    Chandra
                    <span className="hidden md:inline">
                        <br />
                    </span>
                    Prakash Darji
                </h1>
                <AnimatedText
                    as="p"
                    speed={40}
                    classname="md:text-xl lg:text-2xl xl:text-3xl text-primary before:content-['<p>'] before:text-mainDark after:content-['</p>'] after:text-mainDark "
                    text={"Frontend Developer // UI Designer"}
                ></AnimatedText>
            </div>
            <a href="#resume" className="magic-puffIn">
                <div className="downloadCVWrapper">
                    {/* Background text `</>` */}
                    <div className="absolute top-0 left-0 background opacity-20 -rotate-45 flex justify-center items-center h-full w-full text-[13rem] font-black z-10 ">{`</>`}</div>
                    {/* Download CV btn */}

                    <AnimatedText
                        as="div"
                        classname="CV h-full w-full flex justify-center items-center z-50 0 cursor-pointer transition-all duration-500 absolute "
                        text={`<Download CV/>`}
                    ></AnimatedText>
                    {/* Box that pop */}
                    <div className="popBox absolute h-0 w-0 top-1/2 left-1/2 bg-primary -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-500 rounded-full"></div>

                    {/* Spinner */}
                    <div className="arc arc-1"></div>
                    <div className="arc arc-2"></div>
                    <div className="arc arc-3"></div>
                </div>
            </a>
            <div className="curveLine">
                <CurveSvg />
            </div>
        </section>
    );
};

export default Home;

function CurveSvg() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 878.826 678">
            <g
                id="Group_3"
                data-name="Group 3"
                transform="translate(-97.174 -139)"
            >
                <path
                    id="Path_1"
                    data-name="Path 1"
                    d="M5475.719,162.724h-86.277s-1.547,135.657,0,198.591,52.367,167.9,178.905,168.835,396.488-1.733,497.264,0,173.82,84.186,175.553,163.173,0,100.033,0,100.033"
                    transform="translate(-5289)"
                    fill="none"
                    stroke="#00ff94"
                    strokeWidth="5"
                />
                <g id="Group_1" data-name="Group 1" transform="translate(0 66)">
                    <circle
                        id="Ellipse_2"
                        data-name="Ellipse 2"
                        cx="23.5"
                        cy="23.5"
                        r="23.5"
                        transform="translate(162 73)"
                        fill="rgba(0,255,148,0.57)"
                    />
                    <circle
                        id="Ellipse_1"
                        data-name="Ellipse 1"
                        cx="11"
                        cy="11"
                        r="11"
                        transform="translate(175 85)"
                        fill="#fff"
                    />
                </g>
                <g
                    id="Group_2"
                    data-name="Group 2"
                    transform="translate(767 697)"
                >
                    <circle
                        id="Ellipse_2-2"
                        data-name="Ellipse 2"
                        cx="23.5"
                        cy="23.5"
                        r="23.5"
                        transform="translate(162 73)"
                        fill="rgba(0,255,148,0.57)"
                    />
                    <circle
                        id="Ellipse_1-2"
                        data-name="Ellipse 1"
                        cx="11"
                        cy="11"
                        r="11"
                        transform="translate(175 85)"
                        fill="#fff"
                    />
                </g>
                <text
                    id="_"
                    data-name="&lt;/&gt;"
                    transform="translate(410 552)"
                    fill="#fff"
                    fontSize="69"
                    fontFamily="SegoeUI-Semibold, Segoe UI"
                    fontWeight="600"
                    className="textInSvg"
                >
                    <tspan x="0" y="0">
                        &lt;/&gt;
                    </tspan>
                </text>
            </g>
        </svg>
    );
}
