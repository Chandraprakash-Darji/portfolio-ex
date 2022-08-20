import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}
const PrimaryText = ({ children }: Props) => {
    return <span className="text-primary"> {children}</span>;
};

export default PrimaryText;
