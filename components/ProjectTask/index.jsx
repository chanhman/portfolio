import Gallery from 'components/Gallery'
import styles from './ProjectTask.module.scss'

const ProjectTask = ({name, description, children}) => (
  <>
    <div className={styles.header}>
      <h4 className={styles.heading}>{name}</h4>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
    </div>

    <Gallery>
      {children}
    </Gallery>
  </>
)

export default ProjectTask
