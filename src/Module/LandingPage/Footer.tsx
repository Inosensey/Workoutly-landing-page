import Image from "next/image";
import styles from "../../../styles/LandingPage/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.SiteNameContainer}>
        <Image src="/images/Logo.png" height={40} width={40} alt="logo" />
        <h2>Workoutly</h2>
      </div>
      <p>Copyright by 2022 Workoutly, Inc</p>
    </footer>
  );
}

export default Footer;
