import { motion } from 'framer-motion'
import Layout from 'components/Layout'
import Resume from 'components/Resume'

const ResumePage = () => (
  <Layout>
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0,
          y: -30
        },
        visible: {
          opacity: 1,
          transition: {
            delay: .5
          },
          y: 0
        },
      }}
    >
      <Resume />
    </motion.div>
  </Layout>
)

export default ResumePage
