import { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

const Landing: NextPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-dark font-mono text-main">
      <Head>
        <title>Portfolio - Chandraprakash Darji</title>
      </Head>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Landing;
