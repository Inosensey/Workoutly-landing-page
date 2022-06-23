import styles from "../../../styles/LandingPage/Features.module.css";
import Card from "./Card";

function Features() {
  return (
    <section id="Features" className={styles.container}>
      <div className={styles.sectionTitleContainer}>
        <h2>Quality Features</h2>
        <p>Meet the feature of the website</p>
      </div>
      <div className={styles.cardContainer}>
        <Card
          icon={<i className="fa-solid fa-magnifying-glass"></i>}
          title="Discover"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, modi?"
        />
        <Card
          icon={<i className="far fa-smile"></i>}
          title="Beginner"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, modi?"
        />
        <Card
          icon={<i className="fas fa-store"></i>}
          title="E-Commerce"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, modi?"
        />
        <Card
          icon={<i className="fas fa-strikethrough"></i>}
          title="Free"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, modi?"
        />
      </div>
    </section>
  );
}

export default Features;
