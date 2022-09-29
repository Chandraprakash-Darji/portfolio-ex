import { useState } from 'react';
import AltIcon from '../../assets/Icons/AltIcon';
import GithubIcon from '../../assets/Icons/Github';
import GlobeSvg from '../../assets/Icons/GlobeSvg';
import LeftArrow from '../../assets/Icons/LeftArrow';
import { FilmpireHome, filmpireLogo } from '../../assets/images';
import useElementOnSecreen from '../../hook/useElementOnSecreen';
import AnimatedText from '../AnimatedText';
import Heading2 from '../Dummy/Heading2';
import IconBtn from '../Dummy/IconBtn';
import PrimaryText from '../Dummy/PrimaryText';
import './Project.css';

const projectList = ['filpire'];

const Project = () => {
    const [isVisible, containerRef] = useElementOnSecreen();
    const [currentproject, setCurrentproject] = useState(1);
    return (
        <section
            id="myportfolio"
            ref={containerRef}
            className={`container relative mx-auto mt-10 transition-all duration-500 ease-linear lg:mt-52 ${
                isVisible ? 'translate-y-0' : 'translate-y-36 opacity-0'
            }`}
        >
            <div className="flex items-center justify-center">
                <Heading2>
                    {isVisible ? <AnimatedText text="My Portfolio" /> : ''}
                </Heading2>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:py-16">
                <div className="w-full">
                    <figure className="projectImg group relative mx-auto aspect-square h-[20rem] rounded-full lg:h-[30rem] ">
                        <img
                            src={FilmpireHome}
                            alt="HeroImg"
                            className="h-full w-full rounded-full object-cover object-left-top"
                        />
                        <figure className="absolute left-1/2 bottom-16 -translate-x-1/2 rounded-2xl bg-dark px-2 py-1 transition-all duration-300 ">
                            <img
                                src={filmpireLogo}
                                alt="project logo"
                                style={{
                                    filter: 'hue-rotate(129deg) brightness(10)',
                                }}
                            />
                        </figure>
                        <div className="absolute top-1/2 left-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-4" />
                        <div className="project-img-ring absolute top-1/2 left-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-4" />
                        <div className="project-img-ring project-img-ring--1 absolute top-1/2 left-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-4" />
                        <div className="project-img-ring project-img-ring--2 absolute top-1/2 left-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-4" />
                        <div className="project-img-ring project-img-ring--3 absolute top-1/2 left-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-4" />
                    </figure>
                </div>
                <div className="w-full py-7 px-3 lg:px-0">
                    <PrimaryText className="block text-center font-RobotoCondensed text-5xl font-bold tracking-wider lg:text-left lg:text-7xl">
                        Filmpire
                    </PrimaryText>
                    <p className="mt-5 text-xl leading-relaxed lg:text-2xl">
                        Filmpire is movie app where you can search for movie and
                        add to watchlist and Favorite's. You get the
                        recommendation for the similar movies and you have
                        option to get movies by genre.
                    </p>
                    <PrimaryText className="mt-5 mb-10 flex gap-4 lg:text-xl">
                        {['mui', 'redux', 'react', 'typescript'].map((tool) => (
                            <span
                                key={tool}
                                className="rounded-lg border border-primary p-2 px-3 font-bold capitalize hover:bg-primary hover:text-dark"
                            >
                                {tool}
                            </span>
                        ))}
                    </PrimaryText>
                    <div className="flex flex-wrap gap-4 lg:gap-0 lg:text-xl ">
                        <a
                            href="https://filmpirecp.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group w-max rounded-xl border border-primary py-3 px-5 capitalize hover:bg-primary lg:rounded-none lg:rounded-l-xl"
                        >
                            <PrimaryText className="flex items-center justify-center gap-3 group-hover:text-dark">
                                Live
                                <IconBtn>
                                    <GlobeSvg />
                                </IconBtn>
                            </PrimaryText>
                        </a>
                        <a
                            href="https://github.com/Chandraprakash-Darji/filmpire_"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group w-max rounded-xl border border-primary py-3 px-5 capitalize hover:bg-primary lg:rounded-none"
                        >
                            <PrimaryText className="flex items-center justify-center gap-3 group-hover:text-dark">
                                Project Code
                                <IconBtn>
                                    <GithubIcon />
                                </IconBtn>
                            </PrimaryText>
                        </a>
                        <a
                            href="/projects/filmpire"
                            className="group w-max rounded-xl border border-primary py-3 px-5 capitalize hover:bg-primary lg:rounded-none  lg:rounded-r-xl"
                        >
                            <PrimaryText className="flex items-center justify-center gap-3 group-hover:text-dark">
                                Read more
                                <IconBtn>
                                    <AltIcon />
                                </IconBtn>
                            </PrimaryText>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between px-5 lg:m-20 lg:px-16 xl:px-32">
                <button
                    disabled
                    onClick={() =>
                        setCurrentproject((p) => {
                            if (p === 0) {
                                return projectList.length - 1;
                            } else {
                                return p - 1;
                            }
                        })
                    }
                    className="hidden w-max rounded-full border-2 border-main p-5 transition-all duration-300 hover:scale-125 active:scale-110 disabled:opacity-50 disabled:hover:scale-100 md:p-10 lg:block"
                >
                    <PrimaryText>
                        <IconBtn size={50} className="inline-block">
                            <LeftArrow />
                        </IconBtn>
                    </PrimaryText>
                </button>

                <div className="relative mx-auto h-2 w-[35vw] overflow-hidden rounded-3xl bg-primary/20">
                    <div
                        className="absolute top-0 left-0 h-full bg-primary transition-all duration-300"
                        style={{
                            width: `${
                                ((currentproject + 1) / projectList.length) *
                                100
                            }%`,
                        }}
                    />
                </div>

                <button
                    disabled
                    className="hidden w-max rounded-full border-2 border-main p-5 transition-all duration-300 hover:scale-125 active:scale-110 disabled:opacity-50 disabled:hover:scale-100 md:p-10 lg:block"
                    onClick={() =>
                        setCurrentproject((p) => (p + 1) % projectList.length)
                    }
                >
                    <PrimaryText>
                        <IconBtn
                            size={50}
                            className="inline-block h-full rotate-180"
                        >
                            <LeftArrow />
                        </IconBtn>
                    </PrimaryText>
                </button>
            </div>
            <div className="absolute left-[48%] -bottom-[20rem] -z-10 hidden outline-none lg:block">
                <ProjectCurve />
            </div>
        </section>
    );
};

export default Project;

const ProjectCurve = () => {
    const [isVisible, containerRef] = useElementOnSecreen(0.3);

    return (
        <svg
            ref={containerRef}
            xmlns="http://www.w3.org/2000/svg"
            width="667.615"
            height="616"
            viewBox="0 0 667.615 616"
            className={`projectCurve outline-none ${
                isVisible ? 'animate' : ''
            }`}
        >
            <g id="ProjectCurve" transform="translate(-387 -45)">
                <path
                    className="outline-none"
                    d="M5659.318,68.408s2.4,98,117.736,96.807,522.587-2.609,522.587-2.609-.062,37.947-1.331,125.1-88.96,138.779-165.337,140.9-107.565-2.39-315.406,0c-100.709-1.2-157.156,44.808-158.482,114.679-.512,92.854,0,94.693,0,94.693"
                    transform="translate(-5247.554 -0.356)"
                />
                <g id="ProjectCurve-Cirlce--1" transform="translate(225 -28)">
                    <circle
                        cx="23.5"
                        cy="23.5"
                        r="23.5"
                        transform="translate(162 73)"
                        fill="rgba(0,255,148,0.57)"
                    />
                    <circle
                        cx="11"
                        cy="11"
                        r="11"
                        transform="translate(175 85)"
                        fill="#fff"
                    />
                </g>
                <g id="ProjectCurve-Cirlce--2" transform="translate(226 541)">
                    <circle
                        cx="23.5"
                        cy="23.5"
                        r="23.5"
                        transform="translate(162 73)"
                        fill="rgba(0,255,148,0.57)"
                    />
                    <circle
                        cx="11"
                        cy="11"
                        r="11"
                        transform="translate(175 85)"
                        fill="#fff"
                    />
                </g>
                <text
                    id="_"
                    transform="translate(690 450)"
                    fill="#fff"
                    fontSize="69"
                    fontFamily="SegoeUI-Semibold, Segoe UI"
                    fontWeight="600"
                >
                    <tspan x="0" y="0">
                        &lt;/&gt;
                    </tspan>
                </text>
            </g>
        </svg>
    );
};
