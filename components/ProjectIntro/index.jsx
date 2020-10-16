import { motion } from 'framer-motion'
import styles from './ProjectIntro.module.scss'

const ProjectIntro = ({ title, info, role, heading }) => {
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
    <>
      <div className={styles.container}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={motionVariants}
        >
          <h2 className={styles.title}>{title}</h2>

          <div className={styles.inner}>
            <div>
              <h3 className={styles.subtitle}>About</h3>
              <p>{info}</p>
            </div>
            <div>
              <h3 className={styles.subtitle}>Role</h3>
              <p>{role}</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.h2
        className={styles.heading}
        initial="hidden"
        animate="visible"
        variants={motionVariants}
      >
        {heading}
      </motion.h2>
    </>
  )
}

export default ProjectIntro
