import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/7358/startup-photos.jpg?_gl=1*1ppd1zt*_ga*MTI4NjE5NTQ4OC4xNzg5Nzk1NTcw*_ga_8JE65Q40S6*czE3ODk3OTU1NzAkbzEkZzEkdDE3ODk3OTU2ODEkajQ5JGwwJGgw"
          alt="about image"
          fill={true}
          className={styles.img}
        ></Image>
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDescription}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
            <h1 className={styles.title}>Who are We?</h1>
            <p className={styles.description} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusantium reiciendis suscipit itaque? Exercitationem id dolorem quo deserunt blanditiis, quis tempora officiis et voluptatum quaerat, rerum pariatur autem dignissimos laboriosam!</p>
        </div>
        <div className={styles.item}>
            <h1 className={styles.title}>What We Do?</h1>
            <p className={styles.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa odio inventore odit? Obcaecati, dolorem iste sunt natus ab tenetur. Tenetur consequuntur voluptate iure corrupti ipsam ducimus officia beatae, itaque in.
            <br />
            <br />- Dynamic Websies 
            <br />
            <br />- Fast and Handy
            <br />
            <br />- Mobile Apps

        
            </p>
            <Button url="/contact" text="Contact"></Button>
        </div>
      </div>
    </div>
  );
};

export default About;
