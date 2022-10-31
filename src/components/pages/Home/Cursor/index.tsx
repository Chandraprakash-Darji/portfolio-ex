import { FC, useEffect, useRef, useState } from 'react';
import styles from './Cursor.module.css';

const Cursor: FC = () => {
  // State for Cursor
  const [positon, setPositon] = useState({ left: '50%', top: '50%' });
  const [cursorShow, setCursorShow] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  //   Events when cursor moves and we set position
  const mouseMove = (e: MouseEvent): void => {
    setCursorShow(true);
    setPositon({ top: `${e.clientY}px`, left: `${e.clientX}px` });
  };

  //   When cursor leave set postion to middle
  const mouseLeave = (): void => {
    setCursorShow(false);
    setPositon({ left: '50%', top: '50%' });
  };

  //   Mounting the event and demount
  useEffect(() => {
    document?.addEventListener('mousemove', mouseMove);
    document?.addEventListener('mouseleave', mouseLeave);

    return () => {
      document?.removeEventListener('mousemove', mouseMove);
      document?.removeEventListener('mouseleave', mouseLeave);
    };
  }, []);
  return (
    <div
      ref={cursorRef}
      className={`${
        styles.cursor
      } pointer-events-none fixed top-96 left-1/2 z-[9999] hidden aspect-square h-24 -translate-x-1/2 -translate-y-1/2 mix-blend-difference outline-none lg:block  ${
        cursorShow ? '' : 'transition-all duration-300'
      }`}
      style={{
        backgroundImage:
          'radial-gradient(50% 50% at 50% 50%,rgba(169,255,28,0) 0,#fa8c01 100%)',
        top: positon.top,
        left: positon.left,
      }}
    />
  );
};

export default Cursor;
