import Instagram from '../../svgs/instagram.svg'
import Linkedin from '../../svgs/linkedin.svg'
import styles from './Hero.module.scss'

const Hero = () => (
  <header className={styles.container}>
    <h1 className={styles.title}>Chanh Nguyen</h1>
    <p className={styles.pronunciation}>/chanh win/</p>
    <p className={styles.description}>Designer and front-end developer at Objective Inc, living in Salt Lake City, Utah, 
survived a skydiving accident, and now crushing it in the mountains with a brachial plexus injury.</p>
    <div className={styles.socialMediaLinks}>
      <Instagram/>
      <Linkedin/>
    </div>
  </header>   
)

export default Hero