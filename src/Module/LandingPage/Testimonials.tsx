import Image from "next/image";
import styles from "../../../styles/LandingPage/Testimonials.module.css";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  return (
    <section id="Testimonials" className={styles.container}>
      <div className={styles.testimonialTitleContainer}>
        <h2>Testimonials</h2>
        <p>Meet customer satisfaction</p>
      </div>
      <div className={styles.testimonialsContainer}>
        <TestimonialCard
          Rating={4}
          CommentTitle="Design Quality and Performance"
          Comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              doloremque nemo fuga nostrum sed odio placeat reprehenderit
              doloribus eveniet non alias commodi, molestiae impedit, corrupti
              officiis accusamus quo labore nulla! Ut ab non impedit eveniet
              voluptatem commodi repellat perferendis accusantium."
          ImageSrc="/images/dog.jpg"
          Name="Philip Mathew Dingcong"
        />
        <TestimonialCard
          Rating={4}
          CommentTitle="Design Quality and Performance"
          Comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              doloremque nemo fuga nostrum sed odio placeat reprehenderit
              doloribus eveniet non alias commodi, molestiae impedit, corrupti
              officiis accusamus quo labore nulla! Ut ab non impedit eveniet
              voluptatem commodi repellat perferendis accusantium."
          ImageSrc="/images/dog.jpg"
          Name="Philip Mathew Dingcong"
        />
        <TestimonialCard
          Rating={4}
          CommentTitle="Design Quality and Performance"
          Comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              doloremque nemo fuga nostrum sed odio placeat reprehenderit
              doloribus eveniet non alias commodi, molestiae impedit, corrupti
              officiis accusamus quo labore nulla! Ut ab non impedit eveniet
              voluptatem commodi repellat perferendis accusantium."
          ImageSrc="/images/dog.jpg"
          Name="Philip Mathew Dingcong"
        />
      </div>
    </section>
  );
}

export default Testimonials;
