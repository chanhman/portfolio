import styles from './SocialMediaLinks.module.scss'

const SocialMediaLinks = () => (
  <ul className={styles.container}>
    <li>
      <a href="https://www.instagram.com/chanhlemonlime/">
        <img src="instagram.svg" alt="" />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/chanh-nguyen-8ab501b8/">
        <img src="linkedin.svg" alt="" />
      </a>
    </li>
  </ul>
)

export default SocialMediaLinks
