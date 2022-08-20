type ToolIconProps = {
    name: string;
    path: string;
};

const ToolIcon = ({ name, path }: ToolIconProps) => {
    return (
        <li
            className="bg-primary/20 p-4 hover:bg-main/5 flex justify-center items-center rounded-xl border border-primary/70 hover:border-primary/50 shadow-md shadow-main/20 hover:shadow-none hover:rounded-[4rem] transition-all duration-300 group relative"
            title={name}
        >
            <img
                className="w-14 md:w-20 group-hover:p-2 sm:group-hover:p-5 aspect-auto transition-all duration-300 "
                src={path}
                alt={name}
                draggable="false"
            />
            <div className="absolute top-3/4 whitespace-nowrap bg-primary text-dark p-0 group-hover:px-2 group-hover:py-1 z-20 rounded-lg transition-all duration-300 scale-0 group-hover:scale-100 overflow-hidden group-hover:opacity-100 font-bold">
                {name}
            </div>
        </li>
    );
};
export default ToolIcon;
