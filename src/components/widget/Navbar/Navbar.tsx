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
      <header className="NavBar select-none overflow-x-hidden md:text-lg">
        <div
          className="min-w-screen container relative z-50 mx-auto flex items-center justify-between bg-dark py-5 px-3 sm:py-8"
          id="navbar"
        >
          <SmNav from={0} to={2} isLeft />
          <div className="relative flex items-center justify-center px-3 font-RobotoCondensed text-[3rem] font-bold italic before:absolute before:-top-5  before:left-1/2 before:-translate-x-1/2 before:font-sans before:text-base before:font-normal before:not-italic before:text-mainDark before:content-['<>'] after:absolute after:-bottom-5 after:left-1/2 after:-translate-x-1/2 after:font-sans after:text-base after:font-normal after:not-italic after:text-mainDark after:content-['</>'] sm:before:-top-10 sm:after:-bottom-10 md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:px-0 md:text-[5rem]">
            <a href="#home">CP</a>
          </div>
          <OpenMenuBtn />
          <SmNav from={2} to={4} />
        </div>

        <MobileMenu />
      </header>
    </OpenContext.Provider>
  );
};

export default Navbar;
