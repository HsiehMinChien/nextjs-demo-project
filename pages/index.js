import Head from 'next/head';
import '../styling/index.styl';

export default () => (
  <>
    <Head>
      <title>Next.js + Offline + Stylus</title>
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#72B340" />
      <meta
        name="description"
        content="make your Next.js application work offline using service workers via Google's workbox"
      />
    </Head>

    <div>
      <h1 className="title">Next.js + Offline + Stylus</h1>
      <div className="app_range"> App Range </div>
    </div>
  </>
);
