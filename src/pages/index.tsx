import { NextPage } from 'next';
import Head from 'next/head';
import { About, Contact, Hero, Projects } from '../components/pages/Home';
import Navbar from '../components/widget/Navbar';

const Landing: NextPage = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden font-mono">
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
