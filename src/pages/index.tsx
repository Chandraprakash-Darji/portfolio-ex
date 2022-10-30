import { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/core/widget/Navbar";
import { About, Contact, Hero, Projects } from "../components/pages/Home";

const Landing: NextPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-dark font-mono text-main">
      <Head>
        <title>Portfolio - Chandraprakash Darji</title>
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Landing;
