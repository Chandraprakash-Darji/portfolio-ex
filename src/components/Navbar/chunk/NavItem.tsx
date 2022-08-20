import { useContext } from "react";
import { OpenContext } from "..";
import AnimatedText from "../../AnimatedText";

type navItemProps = {
    href: string;
    isLeft?: true;
    text: string;
};
const NavItem = ({ href, isLeft, text }: navItemProps) => {
    const { setOpenState } = useContext(OpenContext);
    return (
        <li
            className={`relative py-3 pl-[1rem] pr-[4rem]  hover:text-primary cursor-pointer transition-all duration-500  after:absolute after:top-0 after:border-transparent after:hover:border-primary after:border-0 after:hover:border after:hover:w-full after:h-full after:left-1/2 after:hover:left-0 after:w-0 after:transition-all after:duration-[400ms] hover:px-10 
               ${
                   isLeft
                       ? "sm:pl-0 sm:pr-[5rem]"
                       : "sm:pl-[5rem] sm:pr-0 text-right"
               }`}
            onClick={() => setOpenState(false)}
        >
            {/* <a href={href}> */}
            <AnimatedText as="a" href={href} text={text} />
            {/* </a> */}
        </li>
    );
};
export default NavItem;
