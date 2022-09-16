import { useContext } from 'react';
import { menuOptions, NavItem, OpenContext } from '..';

const MobileMenu = () => {
    const { openState, setOpenState } = useContext(OpenContext);

    return (
        <>
            <nav
                className={`fixed left-1/2 z-[70] w-[calc(100%-3rem)] max-w-xs -translate-x-1/2 rounded-lg border border-white/30 bg-dark/70 p-3 py-5 backdrop-blur transition-all duration-300 sm:hidden ${
                    openState ? ' top-44' : '-top-[30rem]'
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
                        ? 'visible h-screen w-screen opacity-100'
                        : 'invisible h-0 w-0 opacity-0'
                }`}
                onClick={() => setOpenState(false)}
            ></div>
        </>
    );
};

export default MobileMenu;
