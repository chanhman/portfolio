import ProjectIntro from 'components/ProjectIntro'
import ProjectTask from 'components/ProjectTask'
import styles from './GearTrade.module.scss'

const GearTrade = () => (
  <section className={styles.container}>
    <ProjectIntro
      name="GearTrade"
      info="A marketplace to sell used outdoor gear, GearTrade approached Objective to help with the redesign and development of their website.
      "
      role="I redesigned the website and designed a new workflow for creating new posts by designing wireframes and creating high-fidelity prototypes. I was also responsible for developing the designs."
    />

    <h2 className={styles.subheading}>Tasks</h2>

    <ProjectTask
      name="User research"
      description="Google Analytics was used to view the workflow before the redesign. Working with the client, we located the friction points and decided what needed to be improved before the release, and what could be reworked afterward."
    >
      <img src="http://placekitten.com/g/200/300" alt=""/>
      <img src="http://placekitten.com/g/200/300" alt=""/>
    </ProjectTask>

    <ProjectTask
      name="Workflows and Prototyping"
      description="The client’s first priority was to improve the workflow to create a post. The goal was to remove friction for the user."
    >
      <img src="http://placekitten.com/g/300/200" alt=""/>
    </ProjectTask>

    <ProjectTask
      name="Design"
      description="The website needed an updated look to help create more confidence for their customers. A minimalist design was implemented to make sure the products stood out."
    >
      <img src="http://placekitten.com/g/200/300" alt=""/>
      <img src="http://placekitten.com/g/200/300" alt=""/>
    </ProjectTask>
  </section>
)

export default GearTrade
