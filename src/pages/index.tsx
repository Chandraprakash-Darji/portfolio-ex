import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { About, Contact, Hero, Projects } from '../components/pages/Home';
import SecModal from '../components/pages/Home/15SecModal';
import Navbar from '../components/widget/Navbar';

const Landing: NextPage = () => {
  const [attention, setAttention] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      console.log('ds');
      setAttention(true);
    }, 15000);
  }, []);

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
      {attention && <SecModal handleClose={() => setAttention(false)} />}
    </div>
  );
};

export default Landing;
