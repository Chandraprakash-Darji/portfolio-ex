import * as React from 'react';

import clsxm from '@/lib/clsxm';
import useFrameWorkIcons from '@/lib/hooks/useFrameWorkIcons';
import { FrameworkType } from '@/lib/types';

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

      <section className='flex h-full w-full'>
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
        <div className='flex flex-1 flex-col border-l border-divider'>
          <div className='h-10 border-b border-divider '>
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
              <span className='cursor-pointer hover:text-white' onClick={close}>
                <CloseIcon />
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

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
