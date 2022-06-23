import Image from "next/image";
import styles from "../../../styles/LandingPage/Testimonials.module.css";

interface Props {
  Rating: number;
  CommentTitle: string;
  Comment: string;
  ImageSrc: string;
  Name: string;
}

function TestimonialCard({
  Rating,
  CommentTitle,
  Comment,
  ImageSrc,
  Name,
}: Props) {
  return (
    <div className={styles.testimonials}>
      <div className={styles.commentContainer}>
        <div className={styles.ratingContainer}>
          <div className={styles.starsOuter}>
            <div className={styles.starsInner}></div>
          </div>
          <p>{Rating}/5</p>
        </div>
        <h3>{CommentTitle}</h3>
        <p>{Comment}</p>
      </div>
      <div className={styles.nameContainer}>
        <div className={styles.imageContainer}>
          <Image src={ImageSrc} layout="fill" alt="" objectFit="cover" />
        </div>
        <p>{Name}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
