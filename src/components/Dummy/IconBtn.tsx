import { SvgProps } from "../../@types";

const IconBtn = ({ size, children }: SvgProps) => {
    const sizeIcon = size ? size : 24;
    return (
        <span
            style={{ width: sizeIcon }}
            className="justify-center items-center flex aspect-square"
        >
            {children}
        </span>
    );
};

export default IconBtn;
