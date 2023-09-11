import styles from './Resume.module.scss';

const Resume = () => (
  <section className={styles.container}>
    <header className={styles.header}>
      <h1 className={styles.title}>Chanh Nguyen</h1>
      <p className={styles.intro}>
        A Frontend Engineer who contributed to a wide range of businesses, from
        dynamic startups to well-established agencies. Proficient in{' '}
        <b>React</b>, <b>Next.js</b>, <b>TypeScript</b>, and various styling
        methods such as using <b>styled-components</b>. Demonstrated success in
        delivering high-quality products through best practices and
        collaborative approaches. Strong advocate for code quality and testing.
        Enjoys creating and maintaining design systems in partnership with
        designers for consistency and developers for seamless implementation.
      </p>
    </header>

    <div>
      <h2 className={styles.heading}>Experience</h2>
      <div className={styles.subsection}>
        <h3 className={styles.name}>YouAi</h3>
        <div className={styles.info}>
          <p>April 2023 - July 2023</p>
          <p>Senior Software Engineer</p>
        </div>
        <div className={styles.stack}>
          <b>Stack:</b> React, Next.js, TypeScript, styled-components, MUI,
          Storybook
        </div>
        <ul className={styles.role}>
          <li>
            Contributed to the creation and successful release of the alpha
            version of the product by developing the user interface using a
            combination of React, TypeScript, and styled-components
          </li>
          <li>
            Utilized both OpenAI's API and YouAi's API to capture and store user
            input, leveraging this data to deliver more precise and detailed
            results
          </li>
          <li>
            Established a design system by developing reusable React components,
            ensuring consistency with Material UI, and providing documentation
            using Storybook
          </li>
          <li>
            Carried out thorough testing across various browsers and devices,
            iterated on the features based on user test results and redesigns
          </li>
          <li>
            Collaborated closely with designers to decompose complex features
            into smaller, more manageable components, ensuring feasibility in
            terms of both complexity and meeting specific deadlines
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
          <b>Stack:</b> React, Next.js, TypeScript, styled-components, Jest,
          Cypress, MUI, Storybook
        </div>
        <ul className={styles.role}>
          <li>
            Developed efficient, organized code following current industry best
            practices, utilizing tools such as Next.js, styled-components,
            Storybook, and TypeScript
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
            Collaborated with project managers, developers, and designers to
            decompose features, clearly define requirements, and identify
            potential issues
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
          Wordpress, Craft CMS, Shopify
        </div>
        <ul className={styles.role}>
          <li>
            Collaborated closely with designers to establish design systems and
            develop reusable UI components using tools such as React and Laravel
          </li>
          <li>
            Worked closely with clients, project managers, and developers to
            design and develop customized products that aligned with client
            needs
          </li>
          <li>
            Utilized prototyping tools such as InVision, Sketch, and HTML/CSS to
            validate business models, user experiences, and ideas
          </li>
          <li>
            Played a pivotal role in fostering frontend best practices within
            the team
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
          <li>
            Collaborated with SEO engineers to ensure templates were
            SEO-friendly and made further improvements to the templates
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
