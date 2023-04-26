import { FC, useRef } from 'react';
import { BelowLine, InfoSection, LangaugeAndTools } from '.';

import { useInView } from 'framer-motion';
import AnimatedText from '../../../widget/AnimatedText';
import { Heading2 } from '../../../widget/Headings';

const About: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section
      id="aboutme"
      ref={ref}
      className={`relative mx-auto mt-10 transition-transform duration-500 ease-linear md:mt-36 xl:mt-72 ${
        isInView ? 'translate-x-0' : 'translate-y-36 opacity-0'
      }`}
    >
      <div className="flex items-center justify-center">
        <Heading2>
          {isInView ? <AnimatedText text="Something About Me" /> : ''}
        </Heading2>
      </div>
      <div className="mt-10 flex flex-col gap-x-10 gap-y-10 lg:flex-row xl:gap-x-16">
        <InfoSection />
        <LangaugeAndTools />
      </div>

      <div className="absolute left-1/2 hidden -translate-x-4 lg:-bottom-[13rem] lg:block ">
        <BelowLine />
      </div>
    </section>
  );
};

export default About;
