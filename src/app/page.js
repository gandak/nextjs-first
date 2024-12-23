import Image from "next/image";
import styles from "./page.module.css";
import { Card } from "@/components/Card";
import Header from "@/components/Header1";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Card
        title="NARUTO"
        description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio,
        ex."
        imgUrl="https://cdn.staticneo.com/w/naruto/Nprofile2.jpg"
      />
    </div>
  );
}
