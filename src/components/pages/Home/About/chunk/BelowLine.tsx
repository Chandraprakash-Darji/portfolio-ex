import { FC } from 'react';
import useElementOnSecreen from '../../../../../lib/hooks/useElementOnSecreen';
import styles from './../About.module.css';

const BelowLine: FC = () => {
  const [isVisible, containerRef] = useElementOnSecreen(0.5);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="47"
      height="258"
      ref={containerRef}
      className={`${styles.animateBelowLine} ${
        isVisible ? styles.animate : ''
      }`}
    >
      <g id={styles.BelowLineContainer} transform="translate(-162 -139)">
        <line
          id="BelowLine_Line"
          y2="210.668"
          transform="translate(185.5 164.5)"
          fill="none"
          className="strok-primary"
          strokeWidth="5"
        />
        <g id="BelowLine_Circle-1" transform="translate(162 139)">
          <circle cx="23.5" cy="23.5" r="23.5" className="fill-primary/50" />
          <circle
            cx="11"
            cy="11"
            r="11"
            transform="translate(13 12)"
            fill="#fff"
          />
        </g>
        <g id="BelowLine_Circle-2" transform="translate(162 349.668)">
          <circle
            cx="23.5"
            cy="23.5"
            r="23.5"
            transform="translate(0 0.332)"
            className="fill-primary/50"
          />
          <circle
            cx="11"
            cy="11"
            r="11"
            transform="translate(13 12.332)"
            fill="#fff"
          />
        </g>
      </g>
    </svg>
  );
};

export default BelowLine;
