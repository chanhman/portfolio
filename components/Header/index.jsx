import Link from 'next/link'
import styles from './Header.module.scss'

const Header = () => (
  <header className={styles.container}>
    <Link href="/">
      <h1 className={styles.logo}>C<span>.</span></h1>
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
  </header>
)

export default Header
