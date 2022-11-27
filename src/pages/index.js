import Head from "next/head";

import Expierience from "../components/Expierience/Expierience";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import { Layout } from "../layout/Layout";

const Home = () => {
  return (
    <>
      <Head>
        <title> Portfolio | Daniil Blinnikov</title>
      </Head>

      <Layout>
        <Hero />
        <Projects />
        <Technologies />
        <Expierience />
      </Layout>
    </>
  );
};

export default Home;
