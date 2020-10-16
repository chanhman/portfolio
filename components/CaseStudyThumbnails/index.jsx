import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from './CaseStudyThumbnails.module.scss'

const CaseStudyThumbnails = () => {
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
    <motion.section
      className={styles.container}
      id="case-study"
      initial="hidden"
      animate="visible"
      variants={motionVariants}
    >
      <h2 className={styles.heading}>Case Studies</h2>
      <ul className={styles.thumbnails}>
        <li className={styles.thumbnail}>
          <Link href="/case-studies/built-for-teams">
            <a>
              <img src="projects/case-study-thumb__built-for-teams.svg" alt="" />
            </a>
          </Link>
        </li>
        <li className={styles.thumbnail}>
          <Link href="/case-studies/gear-trade">
            <a>
              <img src="projects/case-study-thumb__gear-trade.svg" alt="" />
            </a>
          </Link>
        </li>
      </ul>
    </motion.section>
  )
}

export default CaseStudyThumbnails
