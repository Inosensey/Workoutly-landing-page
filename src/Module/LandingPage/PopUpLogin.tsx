import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../../../styles/LandingPage/PopUpLogin.module.css";
import {
  ContainedBtn,
  OutlinedBtn,
} from "../../common/Components/Buttons/Buttons";
import { Input } from "../../common/Components/inputs/Input";
import PopOverlay from "./PopOverlay";

// Framer Motion Variants
const DropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

function PopUpLogin({ onClick }: any) {
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToInput = () => {
    if (inputRef.current !== null) {
      inputRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <PopOverlay>
      <div className={styles.container}>
        <motion.div
          className={styles.loginForm}
          variants={DropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <i className="fa-solid fa-xmark" onClick={onClick}></i>
          <div className={styles.headerContainer}>
            <div className={styles.logoContainer}>
              <Image
                src="/images/Logo.png"
                layout="fill"
                objectFit="contain"
                alt=""
              />
            </div>
            <h3>BECOME A MEMBER</h3>
            <p>
              Create your workoutly account to get discounts from our e-commerce
              shop for one month and start your journey for becoming the best
              version of yourself
            </p>
          </div>

          <form autoComplete="off">
            <Input
              LabelName="Email"
              InputType="email"
              InputName="email"
              Placeholder="Enter your Email"
              Ref={inputRef}
              Focus={scrollToInput}
            />
            <Input
              LabelName="Password"
              InputType="password"
              InputName="password"
              Placeholder="Enter your Password"
              Ref={inputRef}
              Focus={scrollToInput}
            />
            <div className={styles.buttonContainer}>
              <ContainedBtn ButtonName="JOIN" Color="primary" />
            </div>
          </form>
        </motion.div>
      </div>
    </PopOverlay>
  );
}

export default PopUpLogin;
