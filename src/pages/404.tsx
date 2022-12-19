import { RiAlarmWarningFill } from 'react-icons/ri';

import Seo from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <>
      <Seo templateTitle='Not Found' />

      <section className='h-full'>
        <div className='layout relative z-10 flex h-full flex-col items-center justify-center text-center'>
          <RiAlarmWarningFill
            size={60}
            className='drop-shadow-glow animate-flicker text-red-500'
          />
          <h1 className='mt-8 text-4xl md:text-6xl'>Page Not Found</h1>
          {/* <ArrowLink className='mt-4 md:text-lg' href='/'>
              Back to Home
            </ArrowLink> */}
        </div>
      </section>
    </>
  );
}
