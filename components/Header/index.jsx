import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from './Header.module.scss'

const Header = () => {
  const motionVariants = {
    hidden: {
      opacity: 0,
      y: -30
    },
    visible: {
      opacity: 1,
      transition: {
        delay: .2
      },
      y: 0
    },
  }

  return (
    <header className={styles.container}>
      <motion.div
        className={styles.inner}
        initial="hidden"
        animate="visible"
        variants={motionVariants}
      >
        <Link href="/">
          <a className={styles.logo}>
            <h1>
              C<span>.</span>
            </h1>
          </a>
        </Link>
        <nav>
          <ul className={styles.nav}>
            <li>
              <Link href="/#case-study">
                <a>Case Studies</a>
              </Link>
            </li>
            <li>
              <Link href="/#about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </motion.div>
    </header>
  )
}

export default Header
