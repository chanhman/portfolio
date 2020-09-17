import Link from 'next/link'
import styles from './Header.module.scss'

const Header = () => (
  <header className={styles.container}>
    <Link href="/">
      <h1>C.</h1>
    </Link>
    <nav>
      <ul className={styles.nav}>
        <li>
          <Link href="/">
            <a>Case Studies</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
