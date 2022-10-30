import { FC, useContext } from 'react';
import { OpenContext } from '..';
import AnimatedText from '../../AnimatedText';

interface navItemProps {
  href: string;
  isLeft?: true;
  text: string;
}
const NavItem: FC<navItemProps> = ({ href, isLeft, text }) => {
  const { setOpenState } = useContext(OpenContext);
  return (
    <li
      className={`relative w-full  ${isLeft ? '' : 'text-right'}`}
      onClick={() => setOpenState(false)}
    >
      <AnimatedText
        className={`block cursor-pointer py-3 pl-[1rem] pr-[4rem] transition-all duration-500 after:absolute after:top-0  after:left-1/2 after:-z-10 after:h-full after:w-0 after:border-0 after:border-transparent after:transition-all after:duration-[400ms] hover:px-10 hover:text-primary after:hover:left-0 after:hover:w-full after:hover:border after:hover:border-primary 
               ${
                 isLeft
                   ? 'sm:pl-0 sm:pr-[5rem]'
                   : 'text-right sm:pl-[5rem] sm:pr-0'
               }`}
        as="a"
        href={href}
        text={text}
      />
    </li>
  );
};
export default NavItem;
