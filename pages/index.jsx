import Layout from 'components/Layout'
import Hero from 'components/Hero'
import CaseStudyThumbnails from 'components/CaseStudyThumbnails'
import About from 'components/About'

const Home = () => (
  <Layout>
    <Hero/>
    <CaseStudyThumbnails/>
    <About/>
  </Layout>
)

export default Home
