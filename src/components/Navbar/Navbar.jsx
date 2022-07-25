import "./NavBar.css";
import logo from "../../assets/vite.svg";
import { createContext, useContext, useEffect, useState } from "react";

const menuOoptions = [
    {
        id: 101,
        children: "//01 <Home/>",
        href: "#home",
    },
    {
        id: 102,
        children: "//02 <AboutMe/>",
        href: "#aboutme",
    },
    {
        id: 103,
        children: "//03 <MyProjects/>",
        href: "#myprojects",
    },

    {
        id: 104,
        children: "//04 <Contact/>",
        href: "#contact",
    },
];
const openContext = createContext({
    openState: false,
    setOpenState: (state) => {},
});

const Navbar = () => {
    const [openState, setOpenState] = useState(false);
    useEffect(() => {
        document.body.style.overflowY = openState ? "hidden" : "scroll";
    }, [openState]);

    return (
        <openContext.Provider value={{ openState, setOpenState }}>
            <header className="NavBar md:text-lg select-none">
                <div
                    className="bg-dark z-50 min-w-screen container mx-auto flex justify-between items-center py-8"
                    id="navbar"
                >
                    <nav className="hidden sm:block">
                        <ul className="flex flex-col gap-2">
                            {menuOoptions
                                .slice(0, 2)
                                .map(({ id, href, children }) => (
                                    <NavItem key={id} href={href} cls="left">
                                        {children}
                                    </NavItem>
                                ))}
                        </ul>
                    </nav>
                    <div className="font-Grestal text-[3rem] flex justify-center items-center px-3 md:px-0 md:text-[5rem]">
                        <a href="#home">CP</a>
                    </div>
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
                    <nav className="hidden sm:block z-0">
                        <ul className="flex flex-col gap-2">
                            {menuOoptions
                                .slice(2, 4)
                                .map(({ id, href, children }) => (
                                    <NavItem key={id} href={href} cls="right">
                                        {children}
                                    </NavItem>
                                ))}
                        </ul>
                    </nav>
                </div>

                <MobileMenu menuOpenState={openState} />
            </header>
        </openContext.Provider>
    );
};

export default Navbar;

const NavItem = ({ href, cls, children }) => {
    const { setOpenState } = useContext(openContext);
    return (
        <li className={"navItem " + cls} onClick={() => setOpenState(false)}>
            <a href={href}>{children}</a>
        </li>
    );
};

const MobileMenu = ({ menuOpenState }) => {
    return (
        <nav
            className={`sm:hidden max-w-xs w-[calc(100%-3rem)] fixed z-50 transition-all duration-300 bg-dark/70 p-3 py-5 rounded-lg border-white/30 border backdrop-blur left-1/2 -translate-x-1/2 ${
                menuOpenState ? " top-44" : "-top-[30rem]"
            }`}
        >
            <ul className=" mx-auto flex flex-col gap-6">
                {menuOoptions.map(({ id, href, children }) => (
                    <NavItem key={id} href={href} cls="">
                        {children}
                    </NavItem>
                ))}
            </ul>
        </nav>
    );
};
