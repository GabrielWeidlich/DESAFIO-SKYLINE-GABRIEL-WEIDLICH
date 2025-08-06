'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";


const imagensApartamentos = [
    { src: "/images/apartamentos/apartamentos1.png", title: "APARTAMENTOS TORRE MAR" },
    { src: "/images/apartamentos/apartamentos2.png", title: "APARTAMENTOS TORRE MAR" },
    { src: "/images/apartamentos/apartamentos3.png", title: "APARTAMENTOS TORRE MAR" },
    { src: "/images/apartamentos/apartamentos4.png", title: "APARTAMENTOS TORRE MAR" },
    { src: "/images/apartamentos/apartamentos5.png", title: "APARTAMENTOS TORRE MAR" },
    { src: "/images/apartamentos/apartamentos6.png", title: "APARTAMENTOS TORRE PARQUE" },
    { src: "/images/apartamentos/apartamentos7.png", title: "APARTAMENTOS TORRE PARQUE" },
    { src: "/images/apartamentos/apartamentos8.png", title: "APARTAMENTOS TORRE PARQUE" },
    { src: "/images/apartamentos/apartamentos9.png", title: "APARTAMENTOS TORRE PARQUE" },
];

export default function Fachada() {

    const [index, setIndex] = useState(-1);

    return (
        <div className="w-[85%] h-full">
            <div>
                <h1 className="text-3xl text-text-primary tracking-wider mb-8 font-mont font-light uppercase">
                    IMAGENS DA <strong>Apartamentos</strong>
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {imagensApartamentos.map((imagem, idx) => (
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
                slides={imagensApartamentos}
                plugins={[Captions]}
            />
        </div>
    );
}