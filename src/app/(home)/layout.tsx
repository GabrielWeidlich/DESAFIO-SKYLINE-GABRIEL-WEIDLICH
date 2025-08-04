import React from 'react';
import NavigationColumn from '@/components/layout/NavigationColumn';
import { menuImages } from '@/lib/data';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (

    <main className="grid h-screen grid-cols-1 md:grid-cols-[30%_1fr] lg:grid-cols-[50%_1fr]">
        <NavigationColumn items={menuImages} />
        <section className="relative hidden md:flex">
          {children}
        </section>
    </main>
  );
}