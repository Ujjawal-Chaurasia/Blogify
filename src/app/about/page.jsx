import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const AboutPage = () => {
  // console.log("lets check where it works")
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h5 className={styles.title}>
          Discover Our World: A Tapestry of Stories, Ideas, and Inspiration in
          Every Word.
        </h5>
        <p className={styles.desc}>
          Welcome to our blog hub! Immerse yourself in compelling stories,
          insightful articles, and diverse perspectives. Discover a space where
          words weave magic and ideas flourish. Join our community of writers
          and readers as we embark on a journey through the power of expression.
          Let your thoughts resonate here.
        </p>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About Image" fill sizes="100%"  className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
