import styles from "../../../styles/LandingPage/BlogSubscription.module.css";

function BlogSubscription() {
  return (
    <section className={styles.blogSubscriptionContainer}>
      <div className={styles.blogSubscriptionTexts}>
        <h2>Subscribe to our blog</h2>
        <p>
          To get the latest updates in our blogs enter your email below to get
          notified
        </p>
      </div>
      <div className={styles.blogSubscriptionInput}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
        />
        <button type="button">Subscribe</button>
      </div>
    </section>
  );
}

export default BlogSubscription;
