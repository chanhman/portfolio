import Link from 'next/link'
import styles from './CaseStudyThumbnails.module.scss'

const CaseStudyThumbnails = () => (
  <div className={styles.container}>
    <h2 className={styles.heading}>Case Studies</h2>
    <ul className={styles.thumbnails}>
      <li className={styles.thumbnail}>
        <Link href="/case-studies/built-for-teams">
          <div>
            <img src="projects/case-study-thumb__built-for-teams.svg" alt=""/>
            {/* <h3 className={styles.name}>Built for Teams</h3> */}
          </div>
        </Link>
      </li>
      <li className={styles.thumbnail}>
        <Link href="/case-studies/gear-trade">
          <div>
            <img src="projects/case-study-thumb__gear-trade.svg" alt=""/>
            {/* <h3 className={styles.name}>GearTrade</h3> */}
          </div>
        </Link>
      </li>
    </ul>
  </div>
)

export default CaseStudyThumbnails
