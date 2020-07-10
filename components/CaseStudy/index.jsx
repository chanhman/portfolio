import Slider from 'react-slick';
import styles from './CaseStudy.module.scss'

const CaseStudy = () => {
  const settings = {
    dots: true,
    className: 'slick-custom'
  };

  return (
    <section className={styles.container}>
      <div className={styles.summary}>
        <h2 className={styles.summaryHeading}>Lorem ipsum dolor sit amet</h2>
        <div className={styles.summaryDescription}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus mauris a diam maecenas sed enim. Dui ut ornare lectus sit amet est placerat in. Lobortis mattis aliquam faucibus purus in massa tempor. Commodo elit at imperdiet dui. Malesuada bibendum arcu vitae elementum. Eget magna fermentum iaculis eu non diam. Sit amet massa vitae tortor condimentum lacinia quis vel. Nascetur ridiculus mus mauris vitae ultricies leo. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing.</p>
        </div>
      </div>

      <div className={styles.gallery}>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </section>
  )
}

export default CaseStudy
