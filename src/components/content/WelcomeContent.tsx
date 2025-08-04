import React from 'react';
import Image from 'next/image';

export default function WelcomeContent() {
    return (
        <div className="flex flex-col items-center text-center">
            <Image
                src="/images/Logo.svg"
                alt="Logo D/SENSE"
                width={600}
                height={300}/>
            <p className="mt-4 max-w-7/10 text-2xl tracking-widest uppercase text-text-secondary text-right font-mont font-extralight">
                Selecione no menu ao lado por qual sessão deseja iniciar!
            </p>
        </div>
    )
}