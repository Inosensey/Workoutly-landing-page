import styles from "../../../styles/LandingPage/Steps.module.css";

interface Props {
  Number: string;
  StepTitle: string;
  StepDescription: string;
}

function StepsCard({ Number, StepTitle, StepDescription }: Props) {
  return (
    <div className={styles.steps}>
      <div className={styles.stepNumber}>
        <h3>{Number}</h3>
      </div>
      <h4>{StepTitle}</h4>
      <p>{StepDescription}</p>
    </div>
  );
}

export default StepsCard;
