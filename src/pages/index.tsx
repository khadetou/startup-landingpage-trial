import Layout from 'components/Layout'
import SEO from 'components/seo'
import type { NextPage } from 'next'
import Banner from 'sections/Banner'


const Home: NextPage = () => {
  return (
    <Layout>
      <SEO title="NextJs Landing Page" />
      <Banner />
    </Layout>
  )
}

export default Home
