import styles from "../../../styles/LandingPage/Steps.module.css";
import ArrowSteps from "./ArrowSteps";
import StepsCard from "./StepsCard";
function Steps() {
  return (
    <section className={styles.container}>
      <div className={styles.stepsTitleContainer}>
        <h2>How it works</h2>
        <p>Explore how the website operates</p>
      </div>
      <div className={styles.stepsContainer}>
        <StepsCard
          Number="01"
          StepTitle="Creation"
          StepDescription="Create an account and then login to the website."
        />
        <ArrowSteps />
        <StepsCard
          Number="02"
          StepTitle="Input important Info"
          StepDescription="Enter your weight and your height."
        />
        <ArrowSteps />
        <StepsCard
          Number="03"
          StepTitle="Choosing"
          StepDescription="The site will automatically select a healthy diet plan and exercises for you
          or you can create your own."
        />
        <ArrowSteps />
        <StepsCard
          Number="04"
          StepTitle="Start"
          StepDescription="You can now start your road on becoming the best version of yourself.
          Simple as that."
        />
      </div>
    </section>
  );
}

export default Steps;
