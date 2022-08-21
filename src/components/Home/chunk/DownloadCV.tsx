import AnimatedText from "../../AnimatedText";

const DownloadCV = () => {
    return (
        <a
            href="/portfolio.pdf"
            target={"_blank"}
            className="magic-puffIn"
            rel="noreferrer"
        >
            <div className="downloadCVWrapper">
                {/* Background text `</>` */}
                <div className="absolute top-0 left-0 background opacity-20 -rotate-45 flex justify-center items-center h-full w-full text-[13rem] font-black z-10 ">{`</>`}</div>
                {/* Download CV btn */}

                <AnimatedText
                    as="div"
                    className="hoverBox h-full w-full flex justify-center items-center z-50 0 cursor-pointer transition-all duration-500 absolute "
                    text={`<Download CV/>`}
                />
                {/* Box that pop */}
                <div className="popBox absolute h-0 w-0 top-1/2 left-1/2 bg-primary -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-500 rounded-full"></div>

                {/* Spinner */}
                <div className="arc arc-1"></div>
                <div className="arc arc-2"></div>
                <div className="arc arc-3"></div>
            </div>
        </a>
    );
};

export default DownloadCV;
