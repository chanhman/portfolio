import { motion } from 'framer-motion'
import styles from './ProjectIntro.module.scss'

const ProjectIntro = ({ name, info, role }) => {
  const motionVariants = {
    hidden: {
      opacity: 0,
      y: -30
    },
    visible: {
      opacity: 1,
      transition: {
        delay: .5
      },
      y: 0
    },
  }

  return (
    <div className={styles.container}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={motionVariants}
      >
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
      </motion.div>
    </div>
  )
}

export default ProjectIntro
