import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from './Header.module.scss'

const Header = () => {
  const motionVariants = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
      },
      y: 0,
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
        <Link href="/" className={styles.logo}>
          <h1>
            C<span>.</span>
          </h1>
        </Link>
        <nav>
          <ul className={styles.nav}>
            <li>
              <Link href="/#case-study">Case Studies</Link>
            </li>
            <li>
              <Link href="/#about">About</Link>
            </li>
          </ul>
        </nav>
      </motion.div>
    </header>
  )
}

export default Header
