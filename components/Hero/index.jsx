import SocialMediaLinks from 'components/SocialMediaLinks'
import CaseStudyThumbnails from 'components/CaseStudyThumbnails'
import styles from './Hero.module.scss'

const Hero = () => (
  <>
    <section className={styles.container}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Chanh Nguyen</h1>
        <p className={styles.pronunciation}>/chan win/</p>
        <p className={styles.description}>I am a designer and front-end developer at <a href="https://www.objectiveinc.com/">Objective</a> in Salt Lake City. Contact me at <a href="mailto:hello@chanh.design">hello@chanh.design</a> if you’d like to collaborate.</p>
        <SocialMediaLinks/>
      </div>
    </section>
    <CaseStudyThumbnails/>
  </>
)

export default Hero
