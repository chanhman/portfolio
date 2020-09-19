import ProjectIntro from 'components/ProjectIntro'
import ProjectTask from 'components/ProjectTask'
import Figure from 'components/Figure'
import BackToTop from 'components/BackToTop'
import styles from './BuiltForTeams.module.scss'

const BuiltForTeams = () => (
  <>
    <section className={styles.container}>
    <ProjectIntro
      name="Built for Teams"
      info="A product by Objective, Built for Teams provides a solution for viewing your entire organization with its Org Chart, tracking of PTO, and managing job applications."
      role="I collaborate with designers and developers by helping with the design process and front-end development. My role ranges from doing user research to designing and developing new features."
    />

    <h2 className={styles.subheading}>Projects</h2>

    <ProjectTask
      name="Design System"
      description="I designed, developed, and helped maintain the design system. This included creating a	 Sketch file with reusable components, and developing a dedicated website that included a preview and code snippets. With the introduction of the design system, designing and developing new features became faster."
    >
      <Figure
        src="/projects/built__design-system.png"
        alt=""
        caption="Lorem ipsum dolor sit amet"
      />
      <Figure
        src="/projects/built__kiln-forms.png"
        alt=""
        caption="Lorem ipsum dolor sit amet"
      />
      <Figure
        src="/projects/built__kiln-buttons.png"
        alt=""
        caption="Lorem ipsum dolor sit amet"
      />
      <Figure
        src="/projects/built__kiln-modal.png"
        alt=""
        caption="Lorem ipsum dolor sit amet"
      />
    </ProjectTask>

    <ProjectTask
      name="Mobile App"
      description="I designed the native application dedicated to making PTO requests. I designed a high fidelity prototype for developers so they would have a clear understanding of how things should behave."
    >
      <Figure
        src="/projects/built__mobile-more-options.png"
        alt=""
        caption="Lorem ipsum dolor sit amet"
      />
      <Figure
        src="/projects/built__mobile-notifications.png"
        alt=""
        caption="Lorem ipsum dolor sit amet"
      />
      <Figure
        src="/projects/built__mobile-delete.png"
        alt=""
        caption="Lorem ipsum dolor sit amet"
      />
    </ProjectTask>

    <ProjectTask
      name="Web App"
      description="I redesigned and developed an updated version of the web app. While writing clean HTML and CSS, I took the opportunity to make the web app responsive. I helped our junior designers by critiquing their work and giving feedback. I also designed, developed, and tested new features."
    >
      <Figure
        src="/projects/built__job.png"
        alt=""
        caption="Lorem ipsum dolor sit amet"
      />
      <Figure
        src="/projects/built__profile.png"
        alt=""
        caption="Lorem ipsum dolor sit amet"
      />
      <Figure
        src="/projects/built__pto.png"
        alt=""
        caption="Lorem ipsum dolor sit amet"
      />
    </ProjectTask>
  </section>
    <BackToTop/>
  </>
)

export default BuiltForTeams
