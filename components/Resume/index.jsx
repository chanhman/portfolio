import styles from './Resume.module.scss';

const Resume = () => (
  <section className={styles.container}>
    <header className={styles.header}>
      <h1 className={styles.title}>Chanh Nguyen</h1>
      <p className={styles.intro}>
        A Frontend Engineer who contributed to a wide range of businesses, from
        dynamic startups to well-established agencies. Proficient in <b>HTML</b>{' '}
        and <b>CSS</b>, <b>JavaScript</b> and <b>TypeScript</b>, <b>React</b>,{' '}
        <b>Next.js</b>, and various styling methods such as using{' '}
        <b>styled-components</b>. Demonstrated success in delivering
        high-quality products through best practices and collaborative
        approaches such as code reviews. Strong advocate for code quality and
        testing. Enjoys creating and maintaining design systems in partnership
        with designers and developers for consistency and seamless
        implementation.
      </p>
    </header>

    <div>
      <h2 className={styles.heading}>Experience</h2>
      <div className={styles.subsection}>
        <h3 className={styles.name}>Xona</h3>
        <div className={styles.info}>
          <p>April 2024 - Current</p>
          <p>Senior Software Engineer</p>
        </div>
        <div className={styles.stack}>
          <b>Stack:</b> React, Remix, TypeScript, MUI, Playwright
        </div>
        <ul className={styles.role}>
          <li>
            Established and maintained design standards for Xona product front ends,
            ensuring consistency and usability across applications
          </li>
          <li>
            Partnered with product stakeholders to define and refine feature designs
            ahead of implementation, ensuring alignment with user needs and business
            goals
          </li>
          <li>
            Built and enhanced frontend features using TypeScript, JavaScript, React,
            and React Remix, while maintaining and improving existing functionality
          </li>
          <li>
            Conducted code reviews to ensure high-quality contributions to Xona frontend
            components, identifying opportunities for improvement and best practices
          </li>
          <li>
            Provided technical guidance to teammates, helping them navigate frontend
            coding decisions and architectural choices
          </li>
          <li>
            Improved development operations by implementing automated testing
            strategies, enhancing test coverage, and streamlining workflows
          </li>
        </ul>
      </div>
      <div className={styles.subsection}>
        <h3 className={styles.name}>Weedmaps</h3>
        <div className={styles.info}>
          <p>Dec 2021 - April 2023</p>
          <p>Software Engineer II</p>
        </div>
        <div className={styles.stack}>
          <b>Stack:</b> React, React Hooks, Next.js, React Query, MobX,
          TypeScript, styled-components, Jest, Cypress, MUI, Storybook
        </div>
        <ul className={styles.role}>
          <li>
            Developed efficient, organized code following current industry best
            practices, utilizing tools such as React, React Hooks, React Query,
            Next.js, styled-components, Storybook, and TypeScript
          </li>
          <li>
            Worked closely with backend engineers to understand the API
            contract, assess existing endpoints, identify necessary endpoint
            creation, and evaluate logic feasibility for feature designs
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
          <li>
            Enhanced the admin application by implementing industry best
            practices, optimizing performance with tools like React Hooks and
            React Query, and transitioning from class-based to functional
            components
          </li>
        </ul>
      </div>
      <div className={styles.subsection}>
        <h3 className={styles.name}>Objective Inc.</h3>
        <div className={styles.info}>
          <p>Aug 2015 - Dec 2021</p>
          <p>Frontend Developer</p>
        </div>
        <div className={styles.stack}>
          <b>Stack:</b> React, Next.js, styled-components, Ruby on Rails,
          Wordpress, Craft CMS, Shopify, HTML, CSS, JavaScript
        </div>
        <ul className={styles.role}>
          <li>
            Worked with diverse clients, ranging from startups to established
            companies, to develop proof of concepts, maintain existing
            applications, and implement new features
          </li>
          <li>
            Played a key role in creating various types of applications,
            including single-page applications, using different frameworks, with
            a specific focus on React.js and JavaScript
          </li>
          <li>
            Define optimal tech stacks for MVP development, closely coordinating
            with backend developers to select appropriate technologies such as
            JavaScript, Ruby on Rails, Phoenix Elixir, and React
          </li>
          <li>
            Worked closely with clients, backend developers, and designers to
            ensure seamless integration of frontend solutions
          </li>
          <li>
            Developed and maintained design systems for consistency and
            efficient feature implementation
          </li>
          <li>
            Focused on cross-device compatibility, ensuring optimal performance
            on various devices, including phones, tablets, and laptops
          </li>
        </ul>
      </div>
      <div className={styles.subsection}>
        <h3 className={styles.name}>Leadformance</h3>
        <div className={styles.info}>
          <p>Oct 2010 - April 2015</p>
          <p>Frontend Developer &amp; Product Designer</p>
        </div>
        <div className={styles.stack}>
          <b>Stack:</b> Ruby on Rails, Sass, Haml, jQuery
        </div>
        <ul className={styles.role}>
          <li>
            Revamped and enhanced both the Admin app and microsite creations,
            empowering brands to effectively promote their European locations
          </li>
          <li>
            Implemented features within the Admin app to help stores maintain
            their information, create deals to generate more leads, and display
            metrics for owners to track the effectiveness of deals
          </li>
          <li>
            Worked with the CPO to design and develop features based on user
            feedback, utilizing tools like Sketch and InVision to quickly create
            prototypes, and collaborated with other developers to implement them
            in the Ruby on Rails app
          </li>
          <li>
            Created reusable templates for designers to quickly produce new
            designs for brands using frameworks like Bootstrap
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
            <a href="https://www.linkedin.com/in/chanhdnguyen">LinkedIn</a>
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
