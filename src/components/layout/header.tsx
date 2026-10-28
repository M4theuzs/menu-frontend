import logomarca from "@/assets/logomarca.svg";
import { SpotButtom } from "@/cases/spots/components/spot-buttom";


export function Header() {

    return (
        <header className="bg-transparent text-brand-foreground"> 
            <div className="mx-auto flex w-full items-center justify-between px-6 py-4">
                <img src={logomarca}  className="h-auto w-48 "/>
                <div>
                    <SpotButtom />
                </div>
            </div>

        </header>
    )
}