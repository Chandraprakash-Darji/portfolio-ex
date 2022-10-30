import { FC, useContext } from 'react';
import { OpenContext } from '..';

const OpenMenuBtn: FC = () => {
  const { openState, setOpenState } = useContext(OpenContext);

  return (
    <button
      className="flex aspect-square w-16 cursor-pointer items-center justify-center p-2 sm:hidden"
      onClick={() => setOpenState((prev) => !prev)}
    >
      <span
        className={`relative block h-1 w-full rounded-full bg-primary transition-all duration-200  before:absolute  before:left-0 before:h-1 before:origin-center  before:rounded-full before:bg-primary before:transition-all before:duration-200 after:absolute after:left-0  after:h-1 after:origin-center after:rounded-full after:bg-primary after:transition-all after:duration-200  ${
          openState
            ? 'rotate-180 bg-transparent before:bottom-0 before:w-12 before:rotate-45 after:top-0  after:w-12 after:-rotate-45'
            : 'before:bottom-3 before:w-3/4 after:top-3 after:w-1/3'
        }`}
      ></span>
    </button>
  );
};

export default OpenMenuBtn;
