'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";
import Captions from 'yet-another-react-lightbox/plugins/captions';
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

const imagensAreasComuns = [
  {
    src: "/images/areas-comuns/imagem-area1.png", title: "HALL DE ENTRADA"},
  { src: "/images/areas-comuns/imagem-area2.png", title: "COWORKING" },
  { src: "/images/areas-comuns/imagem-area3.png", title: "ESPAÇO TEENS" },
  { src: "/images/areas-comuns/imagem-area4.png", title: "PLAYGROUND" },
  { src: "/images/areas-comuns/imagem-area5.png", title: "BRINQUEDOTECA" },
  { src: "/images/areas-comuns/imagem-area6.png", title: "CORREDOR" },
  { src: "/images/areas-comuns/imagem-area7.png", title: "GUEST HOUSE" },
  { src: "/images/areas-comuns/imagem-area8.png", title: "FITNESS" },
  { src: "/images/areas-comuns/imagem-area9.png", title: "ACADEMIA" },
  { src: "/images/areas-comuns/imagem-area10.png", title: "FITNESS/ESTAR/FUNCIONAL" },
  { src: "/images/areas-comuns/imagem-area11.png", title: "SPORTS BAR" },
  { src: "/images/areas-comuns/imagem-area12.png", title: "PISCINA INFANTIL" },
  { src: "/images/areas-comuns/imagem-area13.png", title: "PISCINA ADULTO AQUECIDA" },
  { src: "/images/areas-comuns/imagem-area14.png", title: "SPA" },
  { src: "/images/areas-comuns/imagem-area15.png", title: "SAUNA ÚMIDA E SAUNA SECA" },
  { src: "/images/areas-comuns/imagem-area16.png", title: "SPA" },
  { src: "/images/areas-comuns/imagem-area17.png", title: "JARDIM DO PET PLACE" },
  { src: "/images/areas-comuns/imagem-area18.png", title: "SKY BAR" },
  { src: "/images/areas-comuns/imagem-area19.png", title: "PISCINA ROOFTOP" },
  { src: "/images/areas-comuns/imagem-area20.png", title: "ESPAÇO GOURMET" },
  { src: "/images/areas-comuns/imagem-area21.png", title: "ESPAÇO GRILL" },
  { src: "/images/areas-comuns/imagem-area22.png", title: "OFICINA" },
  { src: "/images/areas-comuns/imagem-area23.png", title: "BIKE SHARING" },
  { src: "/images/areas-comuns/imagem-area24.png", title: "LAVA TUDO" },
  { src: "/images/areas-comuns/imagem-area25.png", title: "DELIVERY SPACE / RECEPÇÃO" },
];

export default function AreasComuns() {

  const [index, setIndex] = useState(-1);

  return (
    <div className="w-[85%] h-full">
      <div>
        
        <div>
          <h1 className="text-3xl text-text-primary tracking-wider mb-8 font-mont font-light">
            IMAGENS DAS <strong>ÁREAS COMUNS</strong>
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1">
          {imagensAreasComuns.map((imagem, idx) => (
            <div
              key={idx}
              className="relative w-full aspect-video rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setIndex(idx)}
            >
              <Image
                src={imagem.src}
                alt={`Áreas comuns ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={imagensAreasComuns}
        plugins={[Captions]}
      />
    </div>
  );
}