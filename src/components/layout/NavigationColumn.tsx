import Image from 'next/image'
import MenuItem from '@/components/ui/MenuItem'


interface NavItem {
  id: string;
  label: string;
  image: string;
}

export default function NavigationColumn({ items }: { items: NavItem[] }) {
  return (
    <aside className="relative h-full overflow-y-scroll no-scrollbar transform">

      <div className="fixed z-10">
        <Image
          src="/images/Logo-vertical.svg"
          alt="Logo D/SENSE Fundo"
          width={600}
          height={1200}
          className="w-auto h-[100vh]"
        />
      </div>

      <div className="relative z-20">
        {items.map((item) => (
          <MenuItem
            key={item.id}
            id={item.id}
            label={item.label}
            image={item.image}
          />
        ))}
      </div>
    </aside>
  );
}


