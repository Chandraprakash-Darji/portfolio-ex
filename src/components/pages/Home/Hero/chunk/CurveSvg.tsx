import { motion } from 'framer-motion';
import { FC } from 'react';
import styles from '../Home.module.css';

const CurveSvg: FC = () => {
  return (
    <div
      className={`${styles.curveLine} absolute top-[13rem] -left-[6rem] hidden w-[30rem] outline-none  md:block lg:top-[16rem] lg:-left-[2rem] lg:w-[34rem] xl:top-[18rem] xl:-left-[1rem] xl:w-[44rem] 2xl:top-[19rem] 2xl:w-[50rem]`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 878.826 678"
        className="outline-none"
      >
        <g transform="translate(-97.174 -139)">
          <motion.path
            id="curveSvgPath"
            d="M5475.719,162.724h-86.277s-1.547,135.657,0,198.591,52.367,167.9,178.905,168.835,396.488-1.733,497.264,0,173.82,84.186,175.553,163.173,0,100.033,0,100.033"
            transform="translate(-5289)"
            fill="none"
            strokeWidth="5"
            className="stroke-primary outline-none"
            style={{ strokeDasharray: 1400 }}
            initial={{ strokeDashoffset: 1400 }}
            animate={{
              strokeDashoffset: 0,
              transition: {
                duration: 1.5,
                ease: 'linear',
              },
            }}
            strokeDashoffset={0}
          />
          <g id="curveSvgPath-Cirlce--1" transform="translate(0 66)">
            <circle
              cx="23.5"
              cy="23.5"
              r="23.5"
              transform="translate(162 73)"
              className="fill-primary/50"
            />
            <circle
              cx="11"
              cy="11"
              r="11"
              transform="translate(175 85)"
              fill="#fff"
            />
          </g>
          <g
            style={{
              animationDelay: '1.5s',
            }}
            transform="translate(767 697)"
            className="animate-opacity opacity-0"
          >
            <circle
              cx="23.5"
              cy="23.5"
              r="23.5"
              transform="translate(162 73)"
              className="fill-primary/50"
            />
            <circle
              cx="11"
              cy="11"
              r="11"
              transform="translate(175 85)"
              fill="#fff"
            />
          </g>
          <motion.text
            data-name="&lt;/&gt;"
            transform="translate(410 552)"
            fill="#fff"
            fontSize="69"
            fontFamily="SegoeUI-Semibold, Segoe UI"
            fontWeight="600"
            initial={{
              opacity: 0,
              x: 300,
              y: 552,
            }}
            animate={{
              opacity: 1,
              x: 410,
              y: 552,
              transition: {
                duration: 0.3,
                ease: 'easeOut',
                delay: 0.7,
              },
            }}
          >
            <tspan x="0" y="0">
              &lt;/&gt;
            </tspan>
          </motion.text>
        </g>
      </svg>
    </div>
  );
};

export default CurveSvg;
