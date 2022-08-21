import { SvgProps } from "../../@types";

const IconBtn = ({ size, children, className }: SvgProps) => {
    const sizeIcon = size ? size : 24;
    return (
        <span
            style={{ width: sizeIcon }}
            className={
                "justify-center items-center flex aspect-square" + className
                    ? className
                    : ""
            }
        >
            {children}
        </span>
    );
};

export default IconBtn;
