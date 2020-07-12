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
          <img src="project/built/built-1.png" alt="" />
        </div>
        <div>
          <img src="project/built/built-2.png" alt="" />
        </div>
        <div>
          <img src="project/built/built-3.png" alt="" />
        </div>
        <div>
          <img src="project/built/built-4.png" alt="" />
        </div>
      </Slider>
    </div>
  )
}

export default Gallery
