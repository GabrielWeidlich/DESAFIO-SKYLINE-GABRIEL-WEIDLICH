import React, { useRef } from "react";
import DraggablePin from "@/components/ui/DraggablePin";

export default function Mapa2D() {
    const constraintsRef = useRef<HTMLDivElement>(null);

    return (
        <div className="w-full h-full relative" ref={constraintsRef}>
            <DraggablePin dragConstraints={constraintsRef} />
        </div>
    );
}