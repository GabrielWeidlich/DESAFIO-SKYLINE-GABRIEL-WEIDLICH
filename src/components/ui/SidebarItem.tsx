import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface SidebarItemProps {
  id: string;
  label: string;
  image: string;
}

export default function SidebarItem({ id, label, image }: SidebarItemProps) {
  return (
    <Link href={`/${id}`} className="cursor-pointer group flex flex-col items-center md:items-start">


      <div className="relative w-full h-[100px] group-hover:h-[400px] transition-[height] duration-500 ease-in-out overflow-hidden shadow-xl/">

        <Image
          src={image}
          alt={label}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity" />
        <div className="text-white text-end uppercase text-sm font-light absolute right-2 bottom-2 font-mont tracking-widest">
          {label}
        </div>
      </div>

    </Link>
  );
}