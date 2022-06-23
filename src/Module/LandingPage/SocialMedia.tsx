import styles from "../../../styles/LandingPage/SocialMedia.module.css";

function SocialMedia() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.socialMediaContainer}>
          <i className="fa-brands fa-discord"></i>
          <h3>Follow us on Discord</h3>
          <p>
            If you have any questions or if you want to chat with us. Join our
            discord channel: link channel here
          </p>
        </div>
        <div className={styles.socialMediaContainer}>
          <i className="fa-brands fa-youtube"></i>
          <h3>Follow us on Youtube</h3>
          <p>
            Follow us on youtube channel for more tutorials and more detailed
            exercies. Youtube channel: link channel here
          </p>
        </div>
        <div className={styles.socialMediaContainer}>
          <i className="fa-brands fa-twitter"></i>
          <h3>Follow us on twitter</h3>
          <p>
            For mor updates follow our twitter account. twitter account: link
            account here
          </p>
        </div>
      </div>
    </section>
  );
}

export default SocialMedia;
