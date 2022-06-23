import styles from "../../../styles/LandingPage/Features.module.css";

interface Props {
  icon: any;
  title: string;
  description: string;
}

function Card({ icon, title, description }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>{icon}</div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
