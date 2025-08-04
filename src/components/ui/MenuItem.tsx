import Image from 'next/image'
import Link from 'next/link';

interface MenuItemProps {
  id: string,
  label: string
  image: string
}

export default function MenuItem({ id, label, image}: MenuItemProps) {
  return (
    <Link href={`/${id}`} className="cursor-pointer group my-8 flex flex-col items-center md:items-end">
      
      <div className="relative w-5/6 aspect-[4/3] min-h-48 shadow-xl/20">
        <Image
          src={image}
          alt={label}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="object-cover absolute inset-0 transition-opacity duration-300 opacity-30 group-hover:opacity-40" />
      </div>

      <div className='w-5/6'>
        <p className="text-right text-2xl tracking-widest mt-2 uppercase font-mont font-extralight">
          {label}
        </p>
      </div>
      
    </Link> 
  );
}