import styles from './ProjectIntro.module.scss'

const ProjectIntro = ({name, info, role}) => (
  <div className={styles.container}>
    <h2 className={styles.heading}>{name}</h2>

    <h3 className={styles.subheading}>About</h3>
    <p>{info}</p>

    <h3 className={styles.subheading}>Role</h3>
    <p>{role}</p>
  </div>
)

export default ProjectIntro
