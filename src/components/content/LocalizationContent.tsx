// src/components/content/LocalizacaoContent.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SubNavButton = ({ label, isActive = false }: { label: string; isActive?: boolean }) => {
  return (
    <button
      className={`px-6 py-2 border border-gray-300 rounded-md text-xs uppercase tracking-widest transition-colors
        ${isActive ? 'bg-gray-800 text-white border-gray-800' : 'bg-transparent text-gray-600 hover:bg-gray-200'}`}
    >
      {label}
    </button>
  );
};


export default function LocalizacaoContent() {
  return (
    <div className="w-full h-full flex">

      <div className="flex-grow flex flex-col">
        
        <main className="flex-grow flex items-center justify-center p-8 bg-background">
          <div></div>
        </main>

        <footer className="w-full p-6 flex items-center justify-center gap-4 bg-background flex-shrink-0">
          <SubNavButton label="Ultratour" isActive={true} />
          <SubNavButton label="Proximidades" />
          <SubNavButton label="Mapa 2D" />
          <SubNavButton label="Mapa Satélite" />
        </footer>
      </div>

      <div className="relative w-24 flex-shrink-0 bg-dark-gray">
        <Link
          href="/"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 transition-transform hover:scale-110"
        >
          <Image src="/icons/Home-btn.svg" alt="Início" width={56} height={56} />
        </Link>
      </div>

    </div>
  );
}