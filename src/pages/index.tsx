import Layout from 'components/Layout'
import SEO from 'components/seo'
import type { NextPage } from 'next'
import Banner from 'sections/Banner'
import KeyFeatures from 'sections/key-features'
import ServiceSection from 'sections/service-section'
import { useState } from 'react';

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Layout isOpen={isOpen} setIsOpen={setIsOpen}>
      <SEO title="NextJs Landing Page" />
      <Banner />
      <KeyFeatures />
      <ServiceSection isOpen={isOpen} setIsOpen={setIsOpen} />
    </Layout>
  )
}

export default Home
