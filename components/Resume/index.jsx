import styles from './Resume.module.scss'

const Resume = () => (
  <section className={styles.container}>
    <header className={styles.header}>
      <h1 className={styles.title}>Chanh Nguyen</h1>
      <p className={styles.subtitle}>Front-end developer &amp; designer</p>
    </header>

    <div>
      <h2 className={styles.heading}>Experience</h2>
      <div className={styles.subsection}>
        <h3 className={styles.name}>Objective</h3>
        <div className={styles.info}>
          <p className={styles.date}>Aug 2015 - Present</p>
          <p className={styles.position}>Designer and front-end developer</p>
          <p className={styles.location}>Salt Lake City, Utah</p>
        </div>
        <ul className={styles.role}>
          <li>Design and develop products to fulfill clients’ needs, in partnership with the clients, project managers, and developers;</li>
          <li>Validate business models, user experiences, and ideas by using prototyping tools such as InVision, Sketch, and HTML and CSS;</li>
          <li>Implement semantic, well-structured HTML and CSS for projects as well as help my colleagues understand and learn best practices; and</li>
          <li>Develop designs using various frameworks such as Bootstrap, React, and Ruby on Rails;</li>
        </ul>
      </div>

      <div className={styles.subsection}>
        <h3 className={styles.name}>Leadformance</h3>
        <div className={styles.info}>
          <p className={styles.date}>Oct 2010 - Apr 2015</p>
          <p className={styles.position}>Product designer</p>
          <p className={styles.location}>Chambéry, France</p>
        </div>
        <ul className={styles.role}>
          <li>Collaborated with developers, the support team, and the product director to understand business requirements and improve the user experience for our products;</li>
          <li>Created workflows, wireframes, and concepts for desktop, tablet, and mobile devices; and</li>
          <li>Tested new features to ensure they match final designs, function on the required devices, and solve the issue at hand;</li>
        </ul>
      </div>

      <div className={styles.oldExperience}>
        <div className={styles.subsection}>
          <h3 className={styles.name}>Silverpoint</h3>
          <div className={styles.info}>
            <p className={styles.date}>Apr 2008 - Sep 2010</p>
            <p className={styles.position}>Web designer</p>
            <p className={styles.location}>Baltimore, MD</p>
          </div>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.name}>carbonhouse</h3>
          <div className={styles.info}>
            <p className={styles.date}>2007 -2008</p>
            <p className={styles.position}>Junior web designer</p>
            <p className={styles.location}>Charlotte, NC</p>
          </div>
        </div>
      </div>
    </div>

    <aside className={styles.aside}>
      <div className={styles.subsection}>
        <h2 className={styles.heading}>Contact</h2>
        <ul>
          <li><a href="https://chanh.design">chanh.design</a></li>
          <li><a href="mailto:hello@chanh.design">hello@chanh.design</a></li>
          <li><a href="https://www.linkedin.com/in/chanh-nguyen-8ab501b8">LinkedIn</a></li>
        </ul>
      </div>

      <div className={styles.subsection}>
        <h2 className={styles.heading}>Skills</h2>
        <ul>
          <li>Sketch</li>
          <li>Figma</li>
          <li>UI</li>
          <li>Visual Design</li>
          <li>Responsive Web Design</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </div>

      <div className={styles.subsection}>
        <h2 className={styles.heading}>Education</h2>
        <p className={styles.schoolName}>UNC Charlotte</p>
        <p className={styles.date}>2007</p>
        <p className={styles.position}>BFA Graphic Design</p>
      </div>
    </aside>
  </section>
)

export default Resume
