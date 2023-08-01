import styles from './Resume.module.scss';

const Resume = () => (
  <section className={styles.container}>
    <header className={styles.header}>
      <h1 className={styles.title}>Chanh Nguyen</h1>
      <p className={styles.subtitle}>Frontend Developer</p>
    </header>

    <div>
      <h2 className={styles.heading}>Experience</h2>
      <div className={styles.subsection}>
        <h3 className={styles.name}>YouAi</h3>
        <div className={styles.info}>
          <p>April 2023 - July 2023</p>
          <p>Senior Software Engineer</p>
        </div>
        <ul className={styles.role}>
          <li>
            Assisted in creating and successfully releasing the alpha version of
            the product using tools such as Next.js, Typescript, and
            styled-components
          </li>
          <li>
            Gathered and analyzed feedback from users within the Discord server,
            working closely with designers to improve and create new features
            based on user insights
          </li>
          <li>
            Conducted thorough testing of ideas, iterating and refining as
            necessary to enhance product performance and user experience
          </li>
          <li>
            Collaborated with designers, project managers, and other developers,
            providing valuable feedback to expedite feature development
          </li>
          <li>
            Introduced and began working on a design system using Storybook and
            Material UI, promoting consistency and improving efficiency in
            prototyping and feature implementation
          </li>
        </ul>
      </div>
      <div className={styles.subsection}>
        <h3 className={styles.name}>Weedmaps</h3>
        <div className={styles.info}>
          <p>Dec 2021 - April 2023</p>
          <p>Software Engineer II</p>
        </div>
        <ul className={styles.role}>
          <li>
            Collaborated with project managers, developers, and designers to
            decompose features, clearly define requirements, and identify
            potential issues
          </li>
          <li>
            Developed efficient, organized code following current industry best
            practices, utilizing tools such as Next.js, styled-components,
            Storybook, and TypeScript
          </li>
          <li>
            Wrote and maintained unit and end-to-end tests, with tools like Jest
            and Cypress, to detect and prevent bugs
          </li>
          <li>
            Created intuitive dashboards for dispensary owners to easily access
            and analyze data, enabling them to optimize sales and refine
            descriptions for generating more leads
          </li>
          <li>
            Utilized tools like Heap and Salesforce to drive the development of
            features that improved client payment efficiency, leading to
            increased on-time bill payments and team revenue growth
          </li>
        </ul>
      </div>
      <div className={styles.subsection}>
        <h3 className={styles.name}>Objective Inc.</h3>
        <div className={styles.info}>
          <p>Aug 2015 - Dec 2021</p>
          <p>Front-end Developer &amp; Designer</p>
        </div>
        <ul className={styles.role}>
          <li>
            Developed projects using semantic, well-organized HTML and CSS
          </li>
          <li>
            Created reusable UI components using React and similar libraries
          </li>
          <li>
            Ensured cross-browser compatibility using the latest optimization
            techniques
          </li>
          <li>
            Assisted team members in learning and implementing front-end best
            practices
          </li>
          <li>
            Collaborated with clients, project managers, and developers to
            design and develop products that met clients' needs and requirements
          </li>
          <li>
            Utilized prototyping tools such as InVision, Sketch, and HTML/CSS to
            validate business models, user experiences, and ideas
          </li>
        </ul>
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
            <a href="www.linkedin.com/in/chanhdnguyen">LinkedIn</a>
          </li>
        </ul>
      </div>

      <div className={styles.subsection}>
        <h2 className={styles.heading}>Skills</h2>
        <ul>
          <li>React</li>
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>JavaScript</li>
          <li>Cypress</li>
          <li>Jest</li>
          <li>Storybook</li>
          <li>styled-components</li>
          <li>Git</li>
          <li>Figma</li>
          <li>Sketch</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </div>

      <div className={styles.subsection}>
        <h2 className={styles.heading}>Education</h2>
        <p className={styles.schoolName}>UNC Charlotte</p>
        <p>2007</p>
        <p>BFA Graphic Design</p>
      </div>
    </aside>
  </section>
);

export default Resume;
