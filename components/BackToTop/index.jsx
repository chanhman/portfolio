import Link from 'next/link'
import styles from './BackToTop.module.scss'

const BackToTop = () => (
  <section className={styles.container}>
    <Link href="/">
      <a>Home</a>
    </Link>
    <a href="#">Top</a>
  </section>
)

export default BackToTop
