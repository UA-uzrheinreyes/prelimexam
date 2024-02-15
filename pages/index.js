import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
          <h3>10 Things That Require Zero Talent</h3>
        <ul>
          <li>Being on Time</li>
          <li>Work Ethic</li>
          <li>Effort</li>
          <li>Body Language</li>
          <li>Energy</li>
          <li>Attitude</li>
          <li>Passion</li>
          <li>Being Coachable</li>
          <li>Doing Extra</li>
          <li>Being Prepared</li>
        </ul>
      </section>
    </Layout>
  );
}