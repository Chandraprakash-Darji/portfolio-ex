import Seo from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <>
      <Seo templateTitle='Not Found' />

      <section className='h-full'>
        <div className='layout relative z-10 flex h-full flex-col items-center justify-center text-center'>
          <svg
            className='drop-shadow-glow animate-flicker text-8xl text-red-500'
            stroke='currentColor'
            fill='currentColor'
            stroke-width='0'
            viewBox='0 0 24 24'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g>
              <path fill='none' d='M0 0h24v24H0z'></path>
              <path d='M4 20v-6a8 8 0 1 1 16 0v6h1v2H3v-2h1zm2-6h2a4 4 0 0 1 4-4V8a6 6 0 0 0-6 6zm5-12h2v3h-2V2zm8.778 2.808l1.414 1.414-2.12 2.121-1.415-1.414 2.121-2.121zM2.808 6.222l1.414-1.414 2.121 2.12L4.93 8.344 2.808 6.222z'></path>
            </g>
          </svg>

          <h1 className='mt-8 text-4xl md:text-6xl'>Page Not Found</h1>
          {/* <ArrowLink className='mt-4 md:text-lg' href='/'>
              Back to Home
            </ArrowLink> */}
        </div>
      </section>
    </>
  );
}
