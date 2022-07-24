import React, { useEffect } from "react";
import "./Home.css";
const Home = () => {
    useEffect(() => {
        const NavBar = document.getElementById("navbar");
        const Home = document.getElementById("home");
        const navheight = NavBar.getBoundingClientRect().height;
        Home.style.setProperty("--x", navheight + "px");
        Home.style.minHeight = `calc(100vh - var(--x))`;
    }, []);

    return (
        <section
            id="home"
            className="container mx-auto flex justify-between text-xl pt-20 gap-10 select-none relative"
        >
            <div className="flex flex-col gap-10">
                <p className="text-3xl text-primary before:content-['<p>'] before:text-mainDark after:content-['</p>'] after:text-mainDark">
                    {" "}
                    I am{" "}
                </p>
                <h1
                    className="text-[6.8rem] py-10 pl-20 relative before:content-['<h1>'] before:text-mainDark after:content-['</h1>'] after:text-mainDark before:text-3xl after:text-3xl before:absolute before:left-10 before:-top-0 after:absolute after:bottom-0 after:left-10 leading-[1.2] after:font-sans before:font-sans"
                    style={{
                        fontFamily:
                            "'Hack NF', ui-sans-serif, system-ui, -apple-system, Roboto, Arial, sans-serif",
                    }}
                >
                    Chandra <br /> Prakash Darji
                </h1>
                <p className="text-3xl text-primary before:content-['<p>'] before:text-mainDark after:content-['</p>'] after:text-mainDark ">
                    {" "}
                    Frontend Developer // UI Designer{" "}
                </p>
            </div>
            <a href="#resume">
                <div className="downloadCVWrapper">
                    {/* Background text `</>` */}
                    <div className="absolute top-0 left-0 background opacity-20 -rotate-45 flex justify-center items-center h-full w-full text-[13rem] font-black z-10 ">{`</>`}</div>
                    {/* Download CV btn */}
                    <div className="CV h-full w-full flex justify-center items-center z-50 0 cursor-pointer transition-all duration-500 absolute">
                        {`<`}Download CV{"/>"}
                    </div>
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
        <svg
            xmlns="http://www.w3.org/2000/svg"
            // width="878.826"
            // height="678"
            viewBox="0 0 878.826 678"
        >
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
                    stroke-width="5"
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
                    font-size="69"
                    font-family="SegoeUI-Semibold, Segoe UI"
                    font-weight="600"
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
