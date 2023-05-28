import Head from "next/head";

import {
  Navbar,
  Hero,
  Stats,
  Business,
  Testimonials,
  Clients,
  styles,
  ContactUs,
} from "../components/Main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hasan</title>
        <meta name="description" content="Wanna build together ?" />
      </Head>
      <main className="bg-blue-gradient w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`bg-blue-gradient ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`bg-blue-gradient ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Testimonials />
            <Clients />
            <ContactUs />
          </div>
        </div>
      </main>
    </div>
  );
}
