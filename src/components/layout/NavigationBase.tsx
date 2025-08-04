import React from "react";
import SidebarItem from "@/components/ui/SidebarItem";
import Image from "next/image";

interface NavItem {
  id: string;
  label: string;
  image: string;
}

export default function NavigationBase({ items }: { items: NavItem[] }) {

  return (
    <aside className="relative h-full overflow-y-scroll no-scrollbar transform">

      <div className="bg-dark-gray h-[16vh] flex items-center justify-center">
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
        />
      ))}

    </aside>
  )
}