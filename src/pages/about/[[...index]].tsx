import { useRouter } from 'next/router';
import * as React from 'react';

import Seo from '@/components/Seo';
import Sidebar from '@/components/Sidebar';
import AboutActivity from '@/components/Sidebar/AboutActivity';
import SidebarMenuOption from '@/components/Sidebar/SidebarMenuOption';

import about from '@/constant/about';
import sidebarMenu from '@/constant/sidebarMenu';
import CloseIcon from '@/Icons/CloseIcon';

const menu = sidebarMenu.personalInfo;
export default function PersonalInfoPage() {
  const { query, push } = useRouter();
  const index = query.index ? query.index[0] : null;
  const file = query.file
    ? typeof query.file === 'string'
      ? query.file
      : query.file[0]
    : null;
  const data = index != null && file != null ? about[file] : null;
  const dataList = data?.split('\n');

  React.useEffect(() => {
    // Always do navigations after the first render
    push('/about/personal-info/?file=basic.md', undefined, {
      shallow: true,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Seo templateTitle='Personal Info of' />

      <section className='flex h-full w-full'>
        <Sidebar>
          <AboutActivity />
          <div className='flex-1'>
            <SidebarMenuOption menu={menu} />
          </div>
        </Sidebar>
        <div className='flex flex-1 flex-col border-l border-divider'>
          <div className='h-10 border-b border-divider '>
            <FileName />
          </div>
          {file == 'null' ? (
            <div className='flex flex-1 items-center justify-center'>
              Open File
            </div>
          ) : (
            <div className='flex flex-1'>
              <div className='flex flex-1 whitespace-pre px-5 pt-5'>
                {data !== '' ? (
                  <>
                    {/* Line number */}
                    <div className='select-none space-y-1 pr-5 text-right'>
                      {dataList?.map((d, i) => (
                        <div key={`${d}${i}`}>{i}</div>
                      ))}
                    </div>
                    {/* Content */}
                    <div className='content space-y-1'>
                      {dataList?.map((d, i) => (
                        <div
                          id={`${d}${i}`}
                          key={`${d}${i}`}
                          className='outline-none focus:bg-base-200'
                          tabIndex={0}
                        >
                          {d}
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div>File Not found</div>
                )}
              </div>
              <hr className='h-full w-[1px] border-0 bg-divider p-0' />
              <div className='flex-1'></div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

const FileName = () => {
  const router = useRouter();

  const close = () => {
    router.push('/about/personal-info/?file=null', undefined, {
      shallow: true,
    });
  };
  return (
    <div className='flex h-full w-max min-w-[12rem] select-none items-center justify-between gap-2 border-r border-divider px-3 italic'>
      {router.query.file}
      <span className='cursor-pointer hover:text-white' onClick={close}>
        <CloseIcon />
      </span>
    </div>
  );
};
