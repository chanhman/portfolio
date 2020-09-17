import Instagram from '../../svgs/instagram.svg'
import Linkedin from '../../svgs/linkedin.svg'
import styles from './SocialMediaLinks.module.scss'

const SocialMediaLinks = () => (
  <ul className={styles.container}>
    <li>
      <a href="https://www.instagram.com/chanhlemonlime/"><Instagram/></a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/chanh-nguyen-8ab501b8/"><Linkedin/></a>
    </li>
  </ul>
)

export default SocialMediaLinks
