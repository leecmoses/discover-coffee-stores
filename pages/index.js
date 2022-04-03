import Head from "next/head";
import styles from "../styles/Home.module.css";

import Banner from "../components/banner.js";

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log("Hi banner button");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="Coffee Connoisseur" content="Locate nearby coffee shops!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText="View stores nearby"
          handleOnClick={handleOnBannerBtnClick}
        />
      </main>
    </div>
  );
}
