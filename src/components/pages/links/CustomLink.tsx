import Link from 'next/link';
import { FC } from 'react';
import styles from './CustomLink.module.css';
interface Props {
  link: {
    name: string;
    href: string;
  };
}

const CustomLink: FC<Props> = ({ link: { href, name } }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bg}></div>
      <Link href={href} target={'_blank'} className={styles.link}>
        <span>{name}</span>
      </Link>
    </div>
  );
};

export default CustomLink;
