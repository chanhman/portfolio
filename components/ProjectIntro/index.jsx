import styles from './ProjectIntro.module.scss'

const ProjectIntro = ({name, info, role}) => (
  <div className={styles.container}>
    <h2 className={styles.heading}>{name}</h2>

    <div className={styles.inner}>
      <div>
        <h3 className={styles.subheading}>About</h3>
        <p>{info}</p>
      </div>
      <div>
        <h3 className={styles.subheading}>Role</h3>
        <p>{role}</p>
      </div>
    </div>
  </div>
)

export default ProjectIntro
