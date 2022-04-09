import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Welcome to Blah Blah Blog</p>
        <p>
          Where I blabber on about anything and everything!
        </p>
      </section>
    </Layout>
  )
}
