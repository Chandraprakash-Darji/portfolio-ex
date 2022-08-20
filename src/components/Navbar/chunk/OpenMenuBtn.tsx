import { useContext } from "react";
import { OpenContext } from "..";

const OpenMenuBtn = () => {
    const { openState, setOpenState } = useContext(OpenContext);

    return (
        <button
            className="w-16 aspect-square flex justify-center items-center p-2 cursor-pointer sm:hidden"
            onClick={() => setOpenState((prev) => !prev)}
        >
            <span
                className={`bg-primary h-1 w-full rounded-full relative block after:h-1 after:absolute  after:rounded-full  after:bg-primary before:h-1 before:absolute before:rounded-full before:bg-primary  after:origin-center before:origin-center transition-all after:transition-all before:transition-all duration-200 after:duration-200 before:duration-200 after:left-0 before:left-0  ${
                    openState
                        ? "after:-rotate-45 after:w-12 before:rotate-45 before:w-12 bg-transparent after:top-0  before:bottom-0 rotate-180"
                        : "after:w-1/3 before:w-3/4 after:top-3 before:bottom-3"
                }`}
            ></span>
        </button>
    );
};

export default OpenMenuBtn;
