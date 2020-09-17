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
            Case Studies
          </Link>
        </li>
        <li>
          <Link href="/">
            About
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
