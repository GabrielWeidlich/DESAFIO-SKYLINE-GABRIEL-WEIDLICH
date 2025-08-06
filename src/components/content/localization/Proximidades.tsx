import React from 'react';

export default function ProximidadesLayout() {
  return (
    <div className="w-full h-full p-8 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        
        <div className="relative w-full mb-12">
          <div className="w-full aspect-video bg-gray-200 border border-gray-300 rounded-lg h-[250px]">
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div className="grid grid-cols-2 grid-rows-3 gap-4 h-100">
            <div className="col-span-1 row-span-2 border-2 border-dashed border-gray-300 rounded-lg"></div>
            <div className="col-span-1 row-span-1 border-2 border-dashed border-gray-300 rounded-lg"></div>
            <div className="col-span-1 row-span-1 border-2 border-dashed border-gray-300 rounded-lg"></div>
            <div className="col-span-2 row-span-1 border-2 border-dashed border-gray-300 rounded-lg"></div>
          </div>

          <div className="flex flex-col">
            <div className="h-24 border-2 border-dashed border-gray-300 rounded-lg mb-8"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="h-30 border-2 border-dashed border-gray-300 rounded-lg"></div>
              <div className="h-30 border-2 border-dashed border-gray-300 rounded-lg"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}