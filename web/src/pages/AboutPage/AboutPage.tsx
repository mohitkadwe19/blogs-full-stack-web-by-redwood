import { Metadata } from '@redwoodjs/web'
import Head from 'next/head'

const AboutPage = () => {
  return (
    <>
      <Head>
        <Metadata title="About" description="About page" />
      </Head>
      <p>
        This site was created to demonstrate my mastery of Redwood: Look on my
        works, ye mighty, and despair!
      </p>
    </>
  )
}

export default AboutPage
