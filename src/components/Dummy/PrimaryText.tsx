import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
}
const PrimaryText = ({ children, className }: Props) => {
    return <span className={`text-primary ${className && className}`}> {children}</span>;
};

export default PrimaryText;
