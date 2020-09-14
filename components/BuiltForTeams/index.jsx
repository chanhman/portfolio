import ProjectIntro from 'components/ProjectIntro'
import ProjectTask from 'components/ProjectTask'
import styles from './BuiltForTeams.module.scss'

const BuiltForTeams = () => (
  <section className={styles.container}>
    <ProjectIntro
      name="Built for Teams"
      info="A product by Objective, it provides a solution for viewing your entire organization with its Org Chart, and keeping track of PTO and job applications"
      role="I collaborate with designers and developers by helping with the design process and front-end development. My role ranges from doing user research to designing and developing new features."
    />

    <h2 className={styles.subheading}>Projects</h2>

    <ProjectTask
      name="Name"
      description="Description"
    >
      <img src="http://placekitten.com/g/200/300" alt=""/>
      <img src="http://placekitten.com/g/200/300" alt=""/>
    </ProjectTask>

    <ProjectTask
      name="Name"
      description="Description"
    >
      <img src="http://placekitten.com/g/200/300" alt=""/>
      <img src="http://placekitten.com/g/200/300" alt=""/>
    </ProjectTask>
  </section>
)

export default BuiltForTeams
