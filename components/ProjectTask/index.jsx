import { motion } from 'framer-motion'
import Gallery from 'components/Gallery'
import styles from './ProjectTask.module.scss'

const ProjectTask = ({ name, description, children }) => (
  <motion.div
    className={styles.container}
    initial="hidden"
    animate="visible"
    variants={{
      hidden: {
        opacity: 0,
        y: -30
      },
      visible: {
        opacity: 1,
        transition: {
          delay: .6
        },
        y: 0
      },
    }}
  >
    <div className={styles.header}>
      <h4 className={styles.heading}>{name}</h4>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
    </div>

    <Gallery>
      {children}
    </Gallery>
  </motion.div>
)

export default ProjectTask
