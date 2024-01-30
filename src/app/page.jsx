import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link"
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Blog Bliss: Unveiling Stories</h1>
        <p className={styles.desc}>
         Journey Through Words: Unveiling Perspectives, Stories, and Wisdom on Our Engaging Blog Platform
        </p>
        <div className={styles.buttons}>
          <Link href="/about" className={styles.button}>Learn More</Link>
          <Link href="/contact" className={styles.button}>Contact</Link>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill sizes="100%"/>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/idea.png" alt="homeimage" fill sizes="100%"/>
      </div>
    </div>
  );
};

export default Home;
