import NavigationBase from '@/components/layout/NavigationBase';
import { menuImages } from '@/lib/data';

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid h-screen grid-cols-3 md:grid-cols-[17%_1fr] lg:grid-cols-[17%_1fr]">
      <NavigationBase items={menuImages} />
      <section className="relative hidden md:flex">
        {children}
      </section>
      <div className='bg-gray'></div>
    </main>
  );
}