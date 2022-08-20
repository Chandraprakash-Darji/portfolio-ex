import { createContext, useEffect, useState } from "react";
import { MobileMenu, OpenMenuBtn, SmNav } from ".";

interface OpenContextProps {
    openState: boolean;
    setOpenState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const OpenContext = createContext<OpenContextProps>({
    openState: false,
    setOpenState: () => {},
});

const Navbar = () => {
    const [openState, setOpenState] = useState(false);
    useEffect(() => {
        document.body.style.overflowY = openState ? "hidden" : "scroll";
    }, [openState]);

    return (
        <OpenContext.Provider value={{ openState, setOpenState }}>
            <header className="NavBar md:text-lg select-none overflow-x-hidden">
                <div
                    className="bg-dark z-50 min-w-screen container mx-auto flex justify-between items-center py-8 relative px-3"
                    id="navbar"
                >
                    <SmNav from={0} to={2} isLeft />
                    <div className="font-RobotoCondensed font-bold relative text-[3rem] flex justify-center items-center px-3 md:px-0 md:text-[5rem]  md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 before:content-['<>'] before:text-mainDark after:content-['</>'] after:text-mainDark before:text-base after:text-base after:font-sans after:not-italic after:font-normal before:not-italic before:font-normal before:font-sans before:absolute before:-top-10 before:left-1/2 before:-translate-x-1/2 after:absolute after:-bottom-10 after:left-1/2 after:-translate-x-1/2">
                        <a href="#home">CP</a>
                    </div>
                    <OpenMenuBtn />
                    <SmNav from={2} to={4}  />
                </div>

                <MobileMenu />
            </header>
        </OpenContext.Provider>
    );
};

export default Navbar;
