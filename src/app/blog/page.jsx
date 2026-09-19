import Button from "@/components/Button/Button";
import styles from "./page.module.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const BLog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            height={250}
            width={400}
            src="https://images.pexels.com/photos/39486450/pexels-photo-39486450.jpeg?_gl=1*fvthts*_ga*MTI4NjE5NTQ4OC4xNzg5Nzk1NTcw*_ga_8JE65Q40S6*czE3ODk4MTY1MDMkbzIkZzEkdDE3ODk4MTY1MDQkajU5JGwwJGgw"
            alt=""
          ></Image>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.description}>Desc</p>
        </div>
      </Link>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            height={250}
            width={400}
            src="https://images.pexels.com/photos/39486450/pexels-photo-39486450.jpeg?_gl=1*fvthts*_ga*MTI4NjE5NTQ4OC4xNzg5Nzk1NTcw*_ga_8JE65Q40S6*czE3ODk4MTY1MDMkbzIkZzEkdDE3ODk4MTY1MDQkajU5JGwwJGgw"
            alt=""
          ></Image>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.description}>Desc</p>
        </div>
      </Link>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            height={250}
            width={400}
            src="https://images.pexels.com/photos/39486450/pexels-photo-39486450.jpeg?_gl=1*fvthts*_ga*MTI4NjE5NTQ4OC4xNzg5Nzk1NTcw*_ga_8JE65Q40S6*czE3ODk4MTY1MDMkbzIkZzEkdDE3ODk4MTY1MDQkajU5JGwwJGgw"
            alt=""
          ></Image>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.description}>Desc</p>
        </div>
      </Link>
    </div>
  );
};

export default BLog;
