import Instagram from '../../svgs/instagram.svg'
import Linkedin from '../../svgs/linkedin.svg'
import styles from './Hero.module.scss'

const Hero = () => (
  <header className={styles.container}>
    <h1 className={styles.title}>Chanh Nguyen</h1>
    <p className={styles.pronunciation}>/chan win/</p>
    <p className={styles.description}>I am a designer and front-end developer at <a href="https://www.objectiveinc.com/">Objective</a> in Salt Lake City. Contact me at <a href="mailto:hello@chanh.design">hello@chanh.design</a> if you’d like to collaborate.</p>
    <div className={styles.socialMediaLinks}>
      <a href="https://www.instagram.com/chanhlemonlime/"><Instagram/></a>
      <a href="https://www.linkedin.com/in/chanh-nguyen-8ab501b8/"><Linkedin/></a>
    </div>
  </header>
)

export default Hero
