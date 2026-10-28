import { MapPin } from "lucide-react";
import { SpotDialog } from "./spot-dialog";
import { useState } from "react";

export function SpotButtom(){

    const [dialogOpen, setDialogOpen] = useState(false);

    return (
    <div className="flex items-center justify-center">
        <button
            className="flex cursor-pointer flex-col items-center gap-1 rounded-2xl px-6 py-4 text-brand-foreground
            transition-colors hover:bg-primary hover:text-brand-foreground"
            onClick={() => setDialogOpen(true)}
        >
            <MapPin className="size-6"/>
            Selecionar Mesa
        </button>

        <SpotDialog open={dialogOpen}/>

    </div>

    )
}