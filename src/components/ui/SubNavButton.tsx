'use client';

import React from "react";

interface SubNavButtonProps {
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

export default function SubNavButton({label, isActive= false, onClick}: SubNavButtonProps) {
    return (
            <button
              onClick={onClick}
              className={`px-8 py-2 rounded-md text-lg uppercase tracking-widest cursor-pointer
                font-mont font-light shadow-xl bg-transparent transition-all duration-300 ease-in-out hover:scale-105
                ${isActive ? 'border border-neutral-950' : 'border border-transparent'}`}
            >
              {label}
            </button>
          );
       
}