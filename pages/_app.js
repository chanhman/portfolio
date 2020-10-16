import { motion } from 'framer-motion';

import '../scss/normalize.scss';
import '../scss/_a.scss';
import '../scss/_body.scss';
import '../scss/_font-family.scss';
import '../scss/_html.scss';
import '../scss/_h1-h6.scss';
import '../scss/_box-sizing.scss';
import '../scss/_p.scss';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps, router }) {
  return (
    <motion.div
      key={router.route}
      initial='pageInitial'
      animate='pageAnimate'
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
        },
      }}
    >
      <Component {...pageProps} />
    </motion.div>
  );
}
