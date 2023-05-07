import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import AllLinksTag from '../components/pages/links/AllLinksTag';
import CustomLink from '../components/pages/links/CustomLink';
import linkTree from '../lib/data/LinkTree';
import socials from '../lib/data/socials';
import useSocialIcons from '../lib/hooks/useSocialIcons';

const Links: NextPage = () => {
  const socialIcons = useSocialIcons();
  return (
    <div className="min-h-screen"> 
      <Head>
        <title>Chandraprakash Darji - Links</title>
      </Head>
      <div className="mx-auto w-full max-w-4xl py-8 text-center md:py-20">
        <div className="relative mx-auto aspect-square w-32 overflow-hidden rounded-full outline-primary md:w-52">
          <Image
            src="https://github.com/Chandraprakash-Darji.png"
            layout="fill"
            alt="Chandraprakash Darji"
          />
        </div>
        <h1 className="mt-6 font-RobotoCondensed text-5xl font-bold">
          Chandraprakash Darji
        </h1>
        <h2 className="mt-3 font-mono font-semibold lowercase text-primary">
          Frontend Developer | React / NextJs Developer | Building Ax Studios |
          Freelancer
        </h2>
        <div className="mt-5">
          <AllLinksTag />
        </div>

        <div className="flex flex-col flex-wrap gap-14 py-10 font-mono text-lg font-bold lowercase tracking-wider md:flex-row md:text-2xl">
          {linkTree.map((link) => {
            return <CustomLink link={link} key={link.name} />;
          })}
        </div>

        <div className="mx-auto flex items-center justify-center gap-5 md:gap-14">
          {socials.map((social) => {
            return (
              <Link href={social.href} key={social.name}>
                <a
                  target={'_blank'}
                  className="aspect-square w-10 shrink-0 text-base-content hover:text-primary"
                >
                  <span className="sr-only">{social.name}</span>
                  {socialIcons[social.name.toLowerCase()]}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Links;
