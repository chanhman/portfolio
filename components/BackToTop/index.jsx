import Link from 'next/link'
import styles from './BackToTop.module.scss'

const BackToTop = () => (
  <section className={styles.container}>
    <Link href="/">
      Home
    </Link>
    <a href="#">Top</a>
  </section>
)

export default BackToTop
