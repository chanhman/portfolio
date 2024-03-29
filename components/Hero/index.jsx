import { motion } from 'framer-motion';
import SocialMediaLinks from 'components/SocialMediaLinks';
import styles from './Hero.module.scss';

const Hero = () => {
  const motionVariants = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
      },
      y: 0,
    },
  };

  return (
    <section className={styles.container}>
      <motion.div
        className={styles.inner}
        initial="hidden"
        animate="visible"
        variants={motionVariants}
      >
        <h1 className={styles.title}>Chanh Nguyen</h1>
        <p className={styles.pronunciation}>/chan win/</p>
        <p className={styles.description}>
          I am a software engineer living in Salt Lake City. Contact me at{' '}
          <a href="mailto:hello@chanh.design">hello@chanh.design</a> if you’d
          like to collaborate.
        </p>

        <SocialMediaLinks />
      </motion.div>
    </section>
  );
};

export default Hero;
