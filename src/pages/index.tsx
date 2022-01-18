import Layout from 'components/Layout'
import SEO from 'components/seo'
import type { NextPage } from 'next'
import Banner from 'sections/Banner'
import KeyFeatures from 'sections/key-features'
import ServiceSection from 'sections/service-section'


const Home: NextPage = () => {
  return (
    <Layout>
      <SEO title="NextJs Landing Page" />
      <Banner />
      <KeyFeatures />
      <ServiceSection />
    </Layout>
  )
}

export default Home
