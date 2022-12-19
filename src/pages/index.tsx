import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <>
      <Seo templateTitle='Home' />

      <section className='layout flex h-full items-center justify-center gap-10'>
        <div className='flex-1'>
          <h1>
            <span className='h4 text-white'>
              Hi all. I am <br />
            </span>
            <span className='h1 text-white'>Chandra Prakash</span>
            <br />
            <span className='h2 text-purple'>&gt; Frontend Developer</span>
          </h1>
          <p className='mt-12'>&#47;&#47; complete the game to continue</p>
          <p className='mt-1'>
            &#47;&#47; you can also see it on my Github page
          </p>
          <p className='mt-1 text-white'>
            <span className='text-purple'>const</span>{' '}
            <span className='text-green'>githubLink</span> =
            <span className='text-orange'>
              {' '}
              “https://github.com/Chandraprakash-Darji/chandraprakash.codes”
            </span>
          </p>
        </div>
        <div className='relative'>
          <NextImage
            className='absolute top-1/2 left-1/2 aspect-[1114/1030] w-[60rem] -translate-x-1/2 -translate-y-1/2'
            fill
            src='/images/hero/backblur.svg'
            alt='snake'
          />
          <NextImage
            className='relative aspect-[510/475] w-[30rem]'
            fill
            src='/images/hero/snake.png'
            alt='snake'
          />
        </div>
      </section>
    </>
  );
}
