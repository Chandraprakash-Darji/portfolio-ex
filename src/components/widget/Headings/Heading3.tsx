import { FC, ReactNode } from 'react';
interface Props {
  children: ReactNode;
  extra?: string;
}
const Heading3: FC<Props> = ({ children, extra }) => {
  return (
    <h3
      className={`relative font-Roboto text-2xl font-bold italic tracking-wide before:text-base before:font-normal before:not-italic before:text-base-200 before:content-['<h3>'] after:text-base after:font-normal  after:not-italic after:text-base-200 after:content-['</h3>'] md:text-4xl md:before:text-lg md:after:text-lg ${
        extra !== undefined ? extra : ''
      }`}
    >
      {children}
    </h3>
  );
};

export default Heading3;
