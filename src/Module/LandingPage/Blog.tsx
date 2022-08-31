import styles from "../../../styles/LandingPage/Blog.module.css";
import BlogCards from "./BlogCards";

function Blog() {
  return (
    <section className={styles.container}>
      <div className={styles.sectionTitleContainer}>
        <h2>Our Blog</h2>
        <p>Explore the benefits when using our workout routines</p>
      </div>
      <div className={styles.blogCardContainer}>
        <BlogCards
          ImgSrc="/images/important-to-start.jpg"
          ImgAlt="BegginerImg"
          BlogTitle="How important for your health to start exercising"
          PosterName="Philip Mathew"
          BlogDate="May 4, 2022"
          LinkUrl="https://workoutly-blog.vercel.app/posts/how-important-for-your-health-to-start-exercising"
        />
        <BlogCards
          ImgSrc="/images/exercise-benefits.jpg"
          ImgAlt="ExerciseBenefitsImg"
          BlogTitle="The benefits of living a healthy life style"
          PosterName="Philip Mathew"
          BlogDate="May 4, 2022"
          LinkUrl="https://workoutly-blog.vercel.app/posts/the-benefits-of-living-a-healthy-lifestyle"
        />
        <BlogCards
          ImgSrc="/images/athlete-mindset.jpg"
          ImgAlt="AthleteMindsetImg"
          BlogTitle="Think like an athelete: How mindset affect our workouts"
          PosterName="Philip Mathew"
          BlogDate="May 4, 2022"
          LinkUrl="https://workoutly-blog.vercel.app/posts/how-mindset-affect-our-workouts"
        />
      </div>
    </section>
  );
}

export default Blog;
