import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface SidebarItemProps {
  id: string;
  label: string;
  image: string;
  selectedItem?: string | null;
}

export default function SidebarItem({ id, label, image, selectedItem}: SidebarItemProps) {
  const isSelected = selectedItem === id;

  return (
    <Link
      href={`/${id}`}
      className="cursor-pointer flex flex-col items-center md:items-start group"
    >
      <div
        className={`
          relative w-full 
           ${isSelected ? "h-[40vh]" : "h-[12.5vh] group-hover:h-[40vh]"} 
          transition-[height] duration-500 ease-in-out 
          overflow-hidden shadow-xl border-r border-neutral-800
        `}
      >
        <Image
          src={image} 
          alt={label}
          fill
          className={`object-cover transition-transform duration-300`}/>
        <div
          className={`
            absolute inset-0 bg-black 
            ${isSelected ? "opacity-0" : "opacity-70 hover:opacity-0"}
            transition-opacity
          `}
        />
        <div className="text-white text-end uppercase text-sm absolute right-2 bottom-2 font-mont tracking-widest">
          {label}
        </div>
      </div>
    </Link>
  );
}