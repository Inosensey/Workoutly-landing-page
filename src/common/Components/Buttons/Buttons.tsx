import styles from "../../../../styles/LandingPage/Buttons.module.css";

interface Props {
  Color: string;
  ButtonName: string;
}

export const ContainedBtn = ({ Color, ButtonName }: Props) => {
  return (
    <button
      className={`${styles.button} ${styles.contained}`}
      style={{
        background: Color === "primary" ? "#1e292b" : "#ff7777",
        color: Color === "primary" ? "#b6b6b6" : "#ffffff",
      }}
    >
      {ButtonName}
    </button>
  );
};
export const OutlinedBtn = ({ Color, ButtonName }: Props) => {
  return (
    <button
      className={`${styles.button} ${styles.outlined}`}
      style={{
        border: Color === "primary" ? "1px solid #1e292b" : "1px solid #ff7777",
        color: Color === "primary" ? "#1e292b" : "#ff7777",
      }}
    >
      {ButtonName}
    </button>
  );
};
