import styles from './About.module.scss'

const About = () => (
  <section className={styles.container} id="about">
    <div className={styles.image}>
      <img src="/bio-pic.jpg" alt=""/>
    </div>
    <div className={styles.bio}>
      <h2 className={styles.heading}>About</h2>
      <div>
        <p>I am a Salt Lake City based front-end developer and designer with over 12 years of experience. My background ranges from working for niche shops to software companies. This has made me comfortable with working on various types of projects, like native and web apps, and collaborating with clients, designers, and developers.</p>
        <p>Outside of work, I take advantage of living in Utah by hiking, running, and skiing. I am always trying to improve my skills so I can be found training for an ultra run, seeing if Figma really is better than Sketch, or watching YouTube videos on JavaScript.</p>
      </div>
    </div>
    <div className={styles.stats}>
      <div>
        <h3 className={styles.subheading}>Experience</h3>
        <ul>
          <li>Front-end developer at Objective</li>
          <li>Product designer at Leadformance</li>
          <li>Web designer at Silverpoint</li>
          <li>Junior web designer at carbonhouse</li>
        </ul>
      </div>
      <div>
        <h3 className={styles.subheading}>Skills</h3>
        <ul>
          <li>Sketch</li>
          <li>Figma</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </div>
      <div>
        <h3 className={styles.subheading}>Contact</h3>
        <ul>
          <li><a href="mailto:hello@chanh.design">hello@chanh.design</a></li>
          <li><a href="https://www.linkedin.com/in/chanh-nguyen-8ab501b8">LinkedIn</a></li>
          <li><a href="https://www.instagram.com/chanhlemonlime/">Instagram</a></li>
        </ul>
      </div>
    </div>
  </section>
)

export default About