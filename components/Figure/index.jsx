import styles from './Figure.module.scss'

const Figure = ({src, alt, caption}) => (
  <figure className={styles.container}>
    <img className={styles.img} src={src} alt={alt} />
    <figcaption className={styles.caption}>
      {caption}
    </figcaption>
  </figure>
)

export default Figure
