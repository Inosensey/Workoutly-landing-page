import Image from "next/image";
import styles from "../../../styles/LandingPage/Services.module.css";

function Services() {
  return (
    <section id="Services" className={styles.container}>
      <h2>Our Services</h2>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src={"/images/services-img-1.png"}
            alt="services-img"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={styles.servicesContainer}>
          <div className={styles.services}>
            <h3>Healthy diet plan</h3>
            <p>
              Workoutly will automatically provide you a healthy diet plan base
              on the weight that you entered or you can manually create it and
              select the ingredients of your choice.
            </p>
          </div>
          <div className={styles.services}>
            <h3>Beginner Friendly Exercise</h3>
            <p>
              If you are only starting to exercise Workoutly will help you
              create the most effective exercises for you
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
