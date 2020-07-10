import styles from './CaseStudy.module.scss'
import Gallery from './Gallery'
import Summary from './Summary'

const CaseStudy = () => {
  return (
    <section className={styles.container}>
      <Summary/>
      <Gallery/>
    </section>
  )
}

export default CaseStudy
