type SocialButtonProps = {
    text: string;
    href: string;
    className: { x: string; y: string; size: string };
};

const SocialButton = ({ text, href, className }: SocialButtonProps) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className={`transition-all duration-500 ${className.x} ${className.y}`}
        >
            <div
                className={`${className.size} aspect-square flex justify-center items-center`}
            >
                <div className="animteSize w-full md:w-full aspect-square border-primary border-2 rounded-full text-main relative  md:text-2xl">
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
export default SocialButton;
