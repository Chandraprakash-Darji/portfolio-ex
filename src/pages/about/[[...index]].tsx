import Seo from '@/components/Seo';
import Sidebar from '@/components/Sidebar';
import AboutActivity from '@/components/Sidebar/AboutActivity';
import SidebarMenuOption from '@/components/Sidebar/SidebarMenuOption';

import sidebarMenu from '@/constant/sidebarMenu';

const menu = sidebarMenu.personalInfo;
export default function PersonalInfoPage() {
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
        <div className='flex-1 border-l border-divider'></div>
      </section>
    </>
  );
}
