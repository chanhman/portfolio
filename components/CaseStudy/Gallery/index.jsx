import Slider from 'react-slick'
import styles from './Gallery.module.scss'

function SampleNextArrow(props) {
  const { className, onClick } = props;

  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}

const Gallery = () => {
  const settings = {
    dots: true,
    className: 'slick-custom',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className={styles.container}>
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
  )
}

export default Gallery
