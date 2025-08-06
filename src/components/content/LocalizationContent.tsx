'use client'; 

import React, { useState } from 'react'; 
import Image from 'next/image';
import Link from 'next/link';
import Mapa2D from '@/components/content/localization/Mapa_2d';
import Proximidades from './localization/Proximidades';
import SubNavButton from '@/components/ui/SubNavButton';


export default function LocalizacaoContent() {
  const [activeTab, setActiveTab] = useState('ultratour');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'ultratour':
        return <div className="text-center text-stone-800">Conteúdo de <strong>Ultratour</strong>.</div>;
      case 'proximidades':
        return <Proximidades />;
      case 'mapa2d':
        return <Mapa2D/>;
      case 'mapasatellite':
        return <Mapa2D/>;
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-full flex">
      <div className="flex-grow flex flex-col">
        <main className="flex-grow flex items-center justify-center p-8 bg-background">
          {renderTabContent()}
        </main>

        <footer className="w-full p-6 flex items-center gap-4 justify-evenly bg-background">
          <SubNavButton 
            label="Ultratour" 
            isActive={activeTab === 'ultratour'} 
            onClick={() => setActiveTab('ultratour')} 
          />
          <SubNavButton 
            label="Proximidades" 
            isActive={activeTab === 'proximidades'} 
            onClick={() => setActiveTab('proximidades')} 
          />
          <SubNavButton 
            label="Mapa 2D" 
            isActive={activeTab === 'mapa2d'} 
            onClick={() => setActiveTab('mapa2d')} 
          />
          <SubNavButton 
            label="Mapa Satélite" 
            isActive={activeTab === 'mapasatellite'} 
            onClick={() => setActiveTab('mapasatellite')} 
          />
        </footer>
      </div>

      <div className="relative w-24 flex-shrink-0 bg-dark-gray">
        <Link
          href="/"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 transition-transform hover:scale-110"
        >
          <Image src="/icons/Home-white.svg" alt="Início" width={56} height={56} />
        </Link>
      </div>
    </div>
  );
}