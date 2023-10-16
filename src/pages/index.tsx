import Head from "next/head";

import IndexPage from "@/pageComponents/Index";

export default function Home() {
  return (
    <>
      <Head>
        <title>YANGIYO’L SHAHAR HOKIMLIGI</title>
        <meta name="description" content="YANGIYO’L SHAHAR HOKIMLIGI" />
        <meta
          name="keywords"
          content="YANGIYO’L SHAHAR HOKIMLIGI"
        />
      </Head>

      <IndexPage />
    </>
  );
}
