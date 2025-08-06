'use client';

import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import SubNavButton from "../ui/SubNavButton";
import Fachada from "./perspective/Fachada";
import AreasComuns from "./perspective/AreasComuns";
import Apartamentos from "./perspective/Apartamentos";

export default function PerspectiveContent() {
    const [activeTab, setActiveTab] = useState('fachada');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'fachada':
        return <Fachada />;
      case 'areascomuns':
        return  <AreasComuns />;
      case 'apartamentos':
        return <Apartamentos />;
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
            label="Fachada" 
            isActive={activeTab === 'fachada'} 
            onClick={() => setActiveTab('fachada')} 
          />
          <SubNavButton 
            label="Áreas Comuns" 
            isActive={activeTab === 'areascomuns'} 
            onClick={() => setActiveTab('areascomuns')} 
          />
          <SubNavButton 
            label="Apartamentos" 
            isActive={activeTab === 'apartamentos'} 
            onClick={() => setActiveTab('apartamentos')} 
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