import WelcomeContent from '@/components/content/WelcomeContent';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      
      <WelcomeContent />

      <Link
        href="/"
        className="absolute bottom-8 right-8 transition-transform hover:scale-110"
      >
        <Image src="/icons/Home-btn.svg" alt="Início" width={56} height={56} />
      </Link>
    </div>
  );
}