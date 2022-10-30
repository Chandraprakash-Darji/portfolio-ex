import Image from 'next/image';
import { FC } from 'react';

interface ToolIconProps {
  name: string;
  path: string;
}

const ToolIcon: FC<ToolIconProps> = ({ name, path }) => {
  return (
    <li
      className="group relative flex items-center justify-center rounded-full border border-primary/70 bg-primary/20 p-4 shadow-md shadow-base-content/20 transition-all duration-300 hover:rounded-[4rem] hover:border-primary/50 hover:bg-base-content/5 hover:shadow-none md:rounded-xl"
      title={name}
    >
      <div className="aspect-square w-20 p-4 transition-all duration-200 group-hover:p-4 sm:p-0 sm:group-hover:p-2 ">
        <div className="relative flex aspect-auto h-full w-full items-center justify-center">
          <Image src={path} alt={name} layout="fill" />
        </div>
      </div>
      <div className="absolute top-3/4 z-20 overflow-hidden whitespace-nowrap rounded-lg bg-primary px-2 py-1 font-bold text-base-100 transition-all duration-300  group-hover:scale-100 group-hover:opacity-100 md:scale-0">
        {name}
      </div>
    </li>
  );
};
export default ToolIcon;
