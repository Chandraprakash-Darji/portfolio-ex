import { useContext } from "react";
import { menuOptions, NavItem, OpenContext } from "..";

const MobileMenu = () => {
    const { openState, setOpenState } = useContext(OpenContext);

    return (
        <>
            <nav
                className={`sm:hidden max-w-xs w-[calc(100%-3rem)] fixed z-[70] transition-all duration-300 bg-dark/70 p-3 py-5 rounded-lg border-white/30 border backdrop-blur left-1/2 -translate-x-1/2 ${
                    openState ? " top-44" : "-top-[30rem]"
                }`}
            >
                <ul className=" mx-auto flex flex-col gap-6">
                    {menuOptions.map(({ id, href, text }) => (
                        <NavItem
                            key={id}
                            href={href}
                            text={text}
                            isLeft={true}
                        />
                    ))}
                </ul>
            </nav>
            <div
                className={`absolute z-[60] bg-gradient-to-br from-primary/10 to-dark/10 backdrop-blur transition-all duration-300 sm:hidden  ${
                    openState
                        ? "opacity-100 visible h-screen w-screen"
                        : "invisible opacity-0 h-0 w-0"
                }`}
                onClick={() => setOpenState(false)}
            ></div>
        </>
    );
};

export default MobileMenu;
