import { SvgProps } from '../../@types';

const IconBtn = ({ size, children, className }: SvgProps) => {
    const sizeIcon = size ? size : 24;
    return (
        <span
            style={{ width: sizeIcon }}
            className={
                'flex aspect-square items-center justify-center' + className
                    ? className
                    : ''
            }
        >
            {children}
        </span>
    );
};

export default IconBtn;
