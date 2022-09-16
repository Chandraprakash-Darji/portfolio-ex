type ToolIconProps = {
    name: string;
    path: string;
};

const ToolIcon = ({ name, path }: ToolIconProps) => {
    return (
        <li
            className="group relative flex items-center justify-center rounded-full border border-primary/70 bg-primary/20 p-4 shadow-md shadow-main/20 transition-all duration-300 hover:rounded-[4rem] hover:border-primary/50 hover:bg-main/5 hover:shadow-none md:rounded-xl"
            title={name}
        >
            <img
                className="aspect-auto w-14 p-2 transition-all duration-300 group-hover:p-2 sm:group-hover:p-5 md:w-20 md:p-0 "
                src={path}
                alt={name}
                draggable="false"
            />
            <div className="absolute top-3/4 z-20 overflow-hidden whitespace-nowrap rounded-lg bg-primary px-2 py-1 font-bold text-dark transition-all duration-300  group-hover:scale-100 group-hover:opacity-100 md:scale-0">
                {name}
            </div>
        </li>
    );
};
export default ToolIcon;
