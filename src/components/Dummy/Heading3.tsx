import { ReactNode } from "react";
interface Props {
    children: ReactNode;
    extra?: string;
}
const Heading3 = ({ children, extra }: Props) => {
    return (
        <h3
            className={`relative text-2xl md:text-4xl font-bold italic font-Roboto tracking-wide before:content-['<h2>'] before:text-mainDark after:content-['</h2>'] after:text-mainDark before:text-base md:before:text-lg  after:text-base md:after:text-lg after:not-italic after:font-normal before:not-italic before:font-normal ${
                extra && extra
            }`}
        >
            {children}
        </h3>
    );
};

export default Heading3;
