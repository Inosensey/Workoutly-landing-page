import styles from "../../../../styles/LandingPage/input.module.css";

interface Props {
  LabelName: string;
  InputName: string;
  InputType: string;
  Placeholder: string;
  Focus: any;
  Ref: any;
}

export const Input = ({
  LabelName,
  InputName,
  InputType,
  Placeholder,
  Ref,
  Focus,
}: Props) => {
  return (
    <div className={styles.formInputContainer}>
      <label>{LabelName}</label>
      <input
        type={InputType}
        name={InputName}
        placeholder={Placeholder}
        ref={Ref}
        onFocus={Focus}
      />
    </div>
  );
};
