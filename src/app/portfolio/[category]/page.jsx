import Button from "@/components/Button/Button";
import Image from "next/image";
import React from "react";
import styles from "./page.module.css";

const Category = async ({ params }) => {
  const { category } = await params;
  return (
    <div className="{styles.container}">
      <h1 className={styles.catTitle}>{category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.description}>Desc</p>
          <Button text="See More" url="#"></Button>
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/39486450/pexels-photo-39486450.jpeg?_gl=1*fvthts*_ga*MTI4NjE5NTQ4OC4xNzg5Nzk1NTcw*_ga_8JE65Q40S6*czE3ODk4MTY1MDMkbzIkZzEkdDE3ODk4MTY1MDQkajU5JGwwJGgw"
            alt=""
          ></Image>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.description}>Desc</p>
          <Button text="See More" url="#"></Button>
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/39486450/pexels-photo-39486450.jpeg?_gl=1*fvthts*_ga*MTI4NjE5NTQ4OC4xNzg5Nzk1NTcw*_ga_8JE65Q40S6*czE3ODk4MTY1MDMkbzIkZzEkdDE3ODk4MTY1MDQkajU5JGwwJGgw"
            alt=""
          ></Image>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.description}>Desc</p>
          <Button text="See More" url="#"></Button>
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/39486450/pexels-photo-39486450.jpeg?_gl=1*fvthts*_ga*MTI4NjE5NTQ4OC4xNzg5Nzk1NTcw*_ga_8JE65Q40S6*czE3ODk4MTY1MDMkbzIkZzEkdDE3ODk4MTY1MDQkajU5JGwwJGgw"
            alt=""
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Category;
