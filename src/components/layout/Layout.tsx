import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-screen overflow-hidden bg-base-200 p-4 font-primary'>
      <div className='flex h-full flex-col rounded-lg border border-divider bg-base-100 text-content'>
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
