import { useRouter } from "next/router";
import Head from "next/head";

const Dynamic = () => {
  const router = useRouter();
  console.log("router", router);
  return (
    <div>
      <Head>
        <title>Page {router.query.dynamic}</title>
      </Head>
      <h1>Page {router.query.dynamic}!</h1>;
    </div>
  );
};

export default Dynamic;
