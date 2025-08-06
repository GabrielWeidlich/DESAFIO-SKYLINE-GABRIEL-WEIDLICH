'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";

const imagensFachada = [
  { src: "/images/fachada/imagem-fachada1.jpg" },
  { src: "/images/fachada/imagem-fachada2.jpg" },
  { src: "/images/fachada/imagem-fachada3.jpg" },
  { src: "/images/fachada/imagem-fachada4.jpg" },
  { src: "/images/fachada/imagem-fachada5.jpg" },
  { src: "/images/fachada/imagem-fachada6.jpg" },
];

export default function Fachada() {

  const [index, setIndex] = useState(-1);

  return (
    <div className="w-[85%] h-full">
      <div>
        <h1 className="text-3xl text-text-primary tracking-wider mb-8 font-mont font-light">
          IMAGENS DA <strong>FACHADA</strong>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {imagensFachada.map((imagem, idx) => (
          <div
            key={idx}
            className="relative w-full aspect-video rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => setIndex(idx)}
          >
            <Image
              src={imagem.src}
              alt={`Fachada ${idx + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={imagensFachada}
      />
    </div>
  );
}