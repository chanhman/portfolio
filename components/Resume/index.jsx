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
          <p className={styles.position}>Software Engineer II (Front-end)</p>
          <p className={styles.location}>Salt Lake City, Utah (Remote)</p>
        </div>
        <ul className={styles.role}>
          <li>
            Collaborate with project managers, developers, and designers to decompose features, clearly define requirements, and identify potential issues;
          </li>
          <li>
            Provide feedback to developers and designers during pull request reviews and design discussions;
          </li>
          <li>
            Develop efficient, organized code that follows current industry best practices, and utilize tools such as Next.js, styled-components, Storybook, and Typescript;
          </li>
          <li>
            Use testing tools like Jest and Cypress to detect and prevent bugs from occurring;
          </li>
          <li>
            Collaborate with the QA team to ensure that all the requirements are available for thorough testing.
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
            Developed projects using semantic, well-organized HTML and CSS;
          </li>
          <li>Created reusable UI components using React and similar libraries;</li>
          <li>
            Ensured cross browser compatibility using the latest optimization
            techniques;
          </li>
          <li>
            Assisted team members in learning and implementing front-end best practices.
          </li>
        </ul>
        <h4>Designer</h4>
        <ul className={styles.role}>
          <li>
            Collaborated with clients, project managers, and developers to design and develop products that met clients' needs and requirements;
          </li>
          <li>
            Utilized prototyping tools such as InVision, Sketch, and HTML/CSS to validate business models, user experiences, and ideas.
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
            Worked closely with developers, the support team, and the product director to comprehend business requirements and enhance the user experience for our products through collaboration;
          </li>
          <li>
            Designed workflows, wireframes, and concepts for desktop, tablet, and mobile devices;
          </li>
          <li>
           Verified that new features accurately match final designs, function correctly on required devices, and effectively address the intended issues through testing.
          </li>
        </ul>
      </div>

      <div className={styles.oldExperience}>
        <div className={styles.subsection}>
          <h3 className={styles.name}>Silverpoint</h3>
          <div className={styles.info}>
            <p className={styles.position}>Web Designer / Apr 2008 - Sep 2010</p>
          </div>
        </div>

        <div className={styles.subsection}>
          <h3 className={styles.name}>carbonhouse</h3>
          <div className={styles.info}>
            <p className={styles.position}>Junior Web Designer / 2007 -2008</p>
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
          <li>Storybook</li>
          <li>styled-components</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Cypress</li>
          <li>Jest</li>
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
