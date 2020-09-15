import styles from './Gallery.module.scss'

const Gallery = ({grid, children}) => (
  <div className={`${styles.container} ${grid && styles.grid}`}>
    {children}
  </div>
)

export default Gallery
