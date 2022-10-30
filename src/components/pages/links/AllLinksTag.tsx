import styles from './AllLinksTag.module.css';

const AllLinksTag = () => {
  return (
    <p className={styles.tag}>
      <span className={styles.leftArr}></span>
      All Link's
      <span className={styles.rightArr}></span>
    </p>
  );
};

export default AllLinksTag;
