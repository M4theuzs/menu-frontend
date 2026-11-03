import { MapPin } from "lucide-react";
import { SpotDialog } from "./spot-dialog";
import { useState } from "react";
import type { SpotDto } from "../dtos/spot.dto";

export function SpotButtom(){

    const [dialogOpen, setDialogOpen] = useState(false);

    const [ selectedSpot, setSelectedSpot] = useState <SpotDto | null> (() => {
        const spotStorage = localStorage.getItem('spot')
        return spotStorage ? JSON.parse(spotStorage) : null;
    });

    function handleSelect(spot: SpotDto){
        localStorage.setItem('spot', JSON.stringify(spot));
        setSelectedSpot(spot);
        setDialogOpen(false);
    }

    return (
    <div className="flex items-center justify-center">
        <button
            className="flex cursor-pointer flex-col items-center gap-1 rounded-2xl px-6 py-4 text-brand-foreground
            transition-colors hover:bg-primary hover:text-brand-foreground"
            onClick={() => setDialogOpen(true)}
        >
            <MapPin className="size-6"/>
            
            {selectedSpot ? selectedSpot.name : 'Selecionar Mesa'}

        </button>

        <SpotDialog 
        open={dialogOpen}
        onSelect={handleSelect}
        selectdedSpotId="selectedSpot?.id"
        />

    </div>

    )
}