import styles from './Resume.module.scss'

const Resume = () => (
  <section className={styles.container}>
    <header className={styles.header}>
      <h1 className={styles.title}>Chanh Nguyen</h1>
      <p className={styles.subtitle}>Front-end Developer &amp; Designer</p>
    </header>

    <div>
      <h2 className={styles.heading}>Experience</h2>
      <div className={styles.subsection}>
        <h3 className={styles.name}>Weedmaps</h3>
        <div className={styles.info}>
          <p className={styles.date}>Dec 2021 - Present</p>
          <p className={styles.position}>Front-end Developer</p>
          <p className={styles.location}>Salt Lake City, Utah (Remote)</p>
        </div>
        <ul className={styles.role}>
          <li>
            Work with project managers, developers, and designers to breakdown
            features and ensure the requirements are clearly defined;
          </li>
          <li>
            Help give feedback on pull requests and in design conversations;
          </li>
          <li>
            Write clean code that follows current patterns and best practices;
          </li>
          <li>
            Identify issues and work with colleagues to find the best methods to
            address them;
          </li>
        </ul>
      </div>
      <div className={styles.subsection}>
        <h3 className={styles.name}>Objective Inc.</h3>
        <div className={styles.info}>
          <p className={styles.date}>Aug 2015 - Dec 2021</p>
          <p className={styles.position}>Front-end Developer &amp; Designer</p>
          <p className={styles.location}>Salt Lake City, Utah</p>
        </div>
        <h4>Front-end Developer</h4>
        <ul className={styles.role}>
          <li>
            Implement semantic, well-structured HTML and CSS for projects;
          </li>
          <li>Develop reusable UI components using libraries such as React;</li>
          <li>
            Ensure cross browser compatibility using the latest optimization
            techniques;
          </li>
          <li>
            Help my colleagues understand and learn front-end best practices;
          </li>
        </ul>
        <h4>Designer</h4>
        <ul className={styles.role}>
          <li>
            Design and develop products to fulfill clients’ needs, in
            partnership with the clients, project managers, and developers;
          </li>
          <li>
            Validate business models, user experiences, and ideas by using
            prototyping tools such as InVision, Sketch, and HTML and CSS;
          </li>
        </ul>
      </div>

      <div className={styles.subsection}>
        <h3 className={styles.name}>Leadformance</h3>
        <div className={styles.info}>
          <p className={styles.date}>Oct 2010 - Apr 2015</p>
          <p className={styles.position}>Product Designer</p>
          <p className={styles.location}>Chambéry, France</p>
        </div>
        <ul className={styles.role}>
          <li>
            Collaborated with developers, the support team, and the product
            director to understand business requirements and improve the user
            experience for our products;
          </li>
          <li>
            Created workflows, wireframes, and concepts for desktop, tablet, and
            mobile devices;
          </li>
          <li>
            Tested new features to ensure they match final designs, function on
            the required devices, and solve the issue at hand;
          </li>
        </ul>
      </div>

      <div className={styles.oldExperience}>
        <div className={styles.subsection}>
          <h3 className={styles.name}>Silverpoint</h3>
          <div className={styles.info}>
            <p className={styles.date}>Apr 2008 - Sep 2010</p>
            <p className={styles.position}>Web Designer</p>
            <p className={styles.location}>Baltimore, MD</p>
          </div>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.name}>carbonhouse</h3>
          <div className={styles.info}>
            <p className={styles.date}>2007 -2008</p>
            <p className={styles.position}>Junior Web Designer</p>
            <p className={styles.location}>Charlotte, NC</p>
          </div>
        </div>
      </div>
    </div>

    <aside className={styles.aside}>
      <div className={styles.subsection}>
        <h2 className={styles.heading}>Contact</h2>
        <ul>
          <li>
            <a href="https://chanh.design">chanh.design</a>
          </li>
          <li>
            <a href="mailto:hello@chanh.design">hello@chanh.design</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/chanh-nguyen-8ab501b8">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.subsection}>
        <h2 className={styles.heading}>Skills</h2>
        <ul>
          <li>Figma</li>
          <li>Sketch</li>
          <li>UI</li>
          <li>Visual Design</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Styled-components</li>
          <li>JavaScript</li>
          <li>Typescript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Cypress</li>
          <li>Git</li>
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
