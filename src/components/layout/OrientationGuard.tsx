'use client';

import { useEffect, useState } from 'react';

export default function OrientationGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLandscape, setIsLandscape] = useState(true);

  useEffect(() => {
    const checkOrientation = () => {
      const isNowLandscape = window.matchMedia('(orientation: landscape)').matches;
      setIsLandscape(isNowLandscape);
    };

    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    return () => window.removeEventListener('resize', checkOrientation);
  }, []);

  if (!isLandscape) {
    return (
      <div className="flex items-center justify-center h-screen p-4 bg-light-beige text-center">
        <h1 className="text-xl font-bold text-neutral-800">
          Por favor, gire o dispositivo para o modo paisagem para continuar.
        </h1>
      </div>
    );
  }

  return <>{children}</>;
}
