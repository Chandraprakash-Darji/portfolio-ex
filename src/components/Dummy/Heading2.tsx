import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}
export default function Heading2({ children }: Props) {
    return (
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-8xl py-5 relative before:content-['<h2>'] before:text-mainDark after:content-['</h2>'] after:text-mainDark before:text-base lg:before:text-xl after:text-base lg:after:text-xl before:absolute before:right-full before:top-0 after:absolute after:bottom-3 after:left-full after:font-sans after:not-italic after:font-normal before:not-italic before:font-normal before:font-sans font-bold italic font-RobotoCondensed tracking-wide select-none">
            {children}
        </h2>
    );
}
