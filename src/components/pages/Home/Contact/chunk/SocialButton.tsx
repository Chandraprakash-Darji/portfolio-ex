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
                className={`${className.size} flex aspect-square items-center justify-center`}
            >
                <div className="animate-pop  relative aspect-square w-full rounded-full border-2 border-primary text-base-content md:w-full  md:text-2xl ">
                    <div className="hoverBox 0 absolute z-50 flex h-full w-full cursor-pointer items-center justify-center text-center transition-all duration-500">
                        {'<>'}
                        <br /> {text}
                        <br /> {'</>'}
                    </div>
                    {/* Box that pop */}
                    <div className="popBox absolute top-1/2 left-1/2 z-10 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary transition-all duration-500"></div>
                </div>
            </div>
        </a>
    );
};
export default SocialButton;
