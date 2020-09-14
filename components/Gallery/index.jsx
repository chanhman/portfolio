import styles from './Gallery.module.scss'

const Gallery = ({children}) => (
  <div className={`${styles.container} ${children.length > 1 && styles.grid}`}>
    {children}
  </div>
)

export default Gallery
