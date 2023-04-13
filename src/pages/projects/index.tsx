import * as React from 'react';
import { FaGithub } from 'react-icons/fa';

import clsxm from '@/lib/clsxm';
import useFrameWorkIcons from '@/lib/hooks/useFrameWorkIcons';
import { FrameworkType } from '@/lib/types';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Sidebar from '@/components/Sidebar';

import CloseIcon from '@/Icons/CloseIcon';
import { FilledArrowIcon } from '@/Icons/sidebar/menu';

export default function ProjectsPage() {
  const [selected, setSelected] = React.useState(framewroks.map(() => false));
  const frameworkIcon = useFrameWorkIcons();
  const onChange = (selecting: number) => {
    setSelected((sel) => sel.map((s, i) => (i === selecting ? !s : s)));
  };
  return (
    <>
      <Seo templateTitle='Projects of' />

      <section className='flex w-full'>
        <Sidebar className='flex-col'>
          <div className='flex h-10 w-full items-center gap-2 border-b border-divider px-3 text-white'>
            <div className='w-max shrink-0 -rotate-90'>
              <FilledArrowIcon />
            </div>
            projects
          </div>
          {framewroks.map((framework, i) => {
            return (
              <label
                className={clsxm(
                  'flex w-full items-center gap-2 py-1 pl-5',
                  'hover:bg-divider/30 focus:outline-none focus-visible:bg-divider/30',
                  selected[i] &&
                    'bg-divider/80 text-white hover:bg-divider/80 focus-visible:bg-divider/80'
                )}
                key={framework.name}
                aria-selected={selected[i]}
              >
                <input
                  type='checkbox'
                  name='framework'
                  className='form-checkbox bg-transparent checked:border-white checked:bg-transparent hover:border-white checked:hover:border-white checked:hover:bg-transparent focus:bg-transparent'
                  checked={selected[i]}
                  onChange={() => onChange(i)}
                  id={framework.name.toLowerCase()}
                />
                {framework.name} {frameworkIcon[framework.icon]}
              </label>
            );
          })}
        </Sidebar>
        <div className='flex flex-grow flex-col overflow-y-auto overflow-x-hidden border-l border-divider'>
          <div className='h-10 shrink-0 border-b border-divider '>
            <div className='flex h-full w-max min-w-[12rem] select-none items-center justify-between gap-2 border-r border-divider px-3 italic'>
              {selected.filter((s) => s).length > 0
                ? framewroks.map((framework, i) =>
                    selected[i] ? (
                      <div
                        key={framework.name}
                        className='ml-4 flex items-center justify-center first:ml-0'
                      >
                        {framework.name}
                        <span className='ml-2 inline-flex items-center justify-center'>
                          {frameworkIcon[framework.icon]};
                        </span>
                      </div>
                    ) : null
                  )
                : 'All the projects'}
              <span
                className='cursor-pointer hover:text-white'
                onClick={() => {
                  setSelected(framewroks.map(() => false));
                }}
              >
                <CloseIcon />
              </span>
            </div>
          </div>
          <div className='flex w-full flex-grow flex-wrap gap-10 overflow-y-auto p-10'>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </section>
    </>
  );
}

const ProjectCard = () => {
  return (
    <article className='w-full max-w-xs'>
      <div>
        <span className='font-bold text-purple'>Project 1</span>{' '}
        <span>&#47;&#47; Percive</span>
      </div>
      <div className='mt-4 overflow-hidden rounded-lg border-2 border-divider'>
        <NextImage
          className='relative aspect-[6/3] w-full border-b-2 border-divider'
          fill
          src='/images/hero/backblur.svg'
          alt='snake'
        />
        <div className='flex flex-col gap-3 p-5'>
          <p>
            This is a project that I made to learn about the basics of react and
            next.js. It is a snake game that you can play with your friends.
          </p>
          <div className='mt-1 flex gap-2'>
            <UnstyledLink
              href='/projects/:id'
              className='max-w-max rounded-xl bg-base-200 px-6 py-2 text-white'
            >
              view-prjects
            </UnstyledLink>
            <UnstyledLink
              href='/projects/:id'
              className='max-w-max rounded-xl bg-base-200 px-6 py-2 text-white'
            >
              <FaGithub />
            </UnstyledLink>
          </div>
        </div>
      </div>
    </article>
  );
};

type frameworkTypeListType = {
  name: string;
  icon: FrameworkType;
}[];

const framewroks: frameworkTypeListType = [
  {
    name: 'React',
    icon: 'react',
  },
  {
    name: 'Next.js',
    icon: 'next',
  },
  {
    name: 'Vite',
    icon: 'vite',
  },
  {
    name: 'Flutter',
    icon: 'flutter',
  },
  {
    name: 'Html',
    icon: 'html',
  },
  {
    name: 'Css',
    icon: 'css',
  },
];
