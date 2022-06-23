import Image from "next/image";
import Link from "next/link";

import styles from "../../../styles/LandingPage/Header.module.css";
import Nav from "./Nav";

function Header({ onClick }: any) {
  return (
    <section id="Home" className={styles.header}>
      <Nav onClick={onClick} />
      <div className={styles.HeaderText}>
        <h2>
          <span>SHAPE</span> your <span>BODY</span> today
        </h2>
        <p>
          Make <span>EXERCISE</span> a priority and you will end up
          <span>HAVING TIME</span> for it
        </p>
        <button>
          <Link href="#Services">
            <a>Explore</a>
          </Link>
        </button>
      </div>
    </section>
  );
}

export default Header;
