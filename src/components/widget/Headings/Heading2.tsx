import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const Heading2: FC<Props> = ({ children }) => {
  return (
    <h2 className="relative select-none py-5 font-RobotoCondensed text-2xl font-bold italic tracking-wide before:absolute before:right-full before:top-0 before:font-sans before:text-base before:font-normal before:not-italic before:text-base-200 before:content-['<h2>'] after:absolute after:bottom-3 after:left-full after:font-sans after:text-base after:font-normal after:not-italic after:text-base-200 after:content-['</h2>'] sm:text-4xl md:text-5xl lg:text-8xl lg:before:text-xl lg:after:text-xl">
      {children}
    </h2>
  );
};

export default Heading2;
