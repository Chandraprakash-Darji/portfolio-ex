import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="v2 min-h-screen flex justify-center items-center bg-[#000003]">
      <div
        className="absolute z-0 top-0 right-0 w-[600px] h-[310px]"
        style={{
          background:
            'linear-gradient(208deg, rgba(232, 74, 74, 0.33) 0%, rgba(232, 74, 74, 0) 80%)',
        }}
      ></div>

      <div className="relative z-10 flex flex-col md:flex-row gap-5 lg:gap-20 items-center justify-center layout ">
        <span className="uppercase font-bold text-primary font-['Big_Shoulders_Display'] text-[16rem] leading-none lg:text-[538px] tracking-tighter">
          Hi!
        </span>

        <div className="max-w-2xl text-center lg:text-left">
          <h1 className="text-white font-normal text-xl font-['Iceland'] uppercase">
            Welcome to by personal website.
          </h1>
          <p className="mt-10 text-white font-normal text-xl font-['Iceland'] uppercase">
            I have created this website to feel like a game/sci-fi interface.
            All text inside tries to reflect this.
            <br />
            <br />
            You will find ‘achievements’ or ‘quests’ that show the progress in
            my professional life and are related to what I am working on.
          </p>
          <Link
            href="/portfolio"
            className="px-8 relative group text-2xl uppercase font-bold py-4 mt-16 border border-primary font-['Big Shoulders Display'] text-primary hover:text-white w-max block mx-auto lg:mx-0"
          >
            <span className="relative z-20">ENTER THE SYSTEM</span>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 rounded-full group-hover:rounded-none group-hover:w-full group-hover:h-full z-10 bg-primary transition-all "></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
