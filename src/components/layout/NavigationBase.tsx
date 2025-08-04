'use client';

import React from "react";
import SidebarItem from "@/components/ui/SidebarItem";
import Image from "next/image";
import { useMemo } from "react";
import { usePathname } from "next/navigation";

interface NavItem {
  id: string;
  label: string;
  image: string;
}

export default function NavigationBase({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  const selectedItem = useMemo(() => {
    const parts = pathname.split('/');
    return parts[1] || null;
  }, [pathname]);

  return (
    <aside className="h-[100vh] overflow-y-auto no-scrollbar">
      <div className="bg-dark-gray h-[16vh] flex items-center justify-center pr-4 pl-4 border border-neutral-800">
        <Image
          src="/images/Logo-white.svg"
          alt="Logo D/SENSE"
          width={200}
          height={100}
        />
      </div>

      {items.map((item) => (
        <SidebarItem
          key={item.id}
          id={item.id}
          label={item.label}
          image={item.image}
          selectedItem={selectedItem}
        />
      ))}
    </aside>
  );
}