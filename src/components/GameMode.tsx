import { useImpostors } from "@/hooks/Impostors";
import Players from "@/components/pages/Players";
import { Button } from "@/components/ui/button";
import { usePlayers } from "@/hooks/Players";
import Themes from "./pages/Themes";

const GameMode = () => {

    const { players, loaded } = usePlayers();
    const { incrementImpostors, decrementImpostors, impostors } = useImpostors(players.length);

    return (
        <>
            <div className="border border-zinc-800 bg-[#1b1b27] rounded-lg">
                {/* JOGADORES */}
                <div className="flex justify-between items-center text-sm border-b border-zinc-600 px-4 py-4 bg-tranparent text-white cursor-pointer">
                    <div className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                        </svg>

                        <p className="text-white font-medium tracking-wide">Jogadores</p>
                    </div>

                    <Players />
                </div>

                {/* IMPOSTOR */}
                <div className="flex justify-between items-center text-sm border-b border-zinc-600 px-4 py-4 bg-tranparent text-white">
                    <div className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                        </svg>

                        <p className="text-white font-medium tracking-wide">Impostores</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Button
                            onClick={decrementImpostors}
                            disabled={impostors === 1}
                            size="sm"
                            className="bg-transparent cursor-pointer flex items-center space-x-1 text-white hover:bg-transparent focus:ring-0"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 bg-[#00d862] rounded-full text-black font-bold">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                            </svg>
                        </Button>

                        <span>{impostors}</span>

                        <Button
                            onClick={incrementImpostors}
                            size="sm"
                            disabled={!loaded || players.length < 2 || impostors >= players.length - 1}
                            className="bg-transparent cursor-pointer flex items-center space-x-1 text-white hover:bg-transparent focus:ring-0"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 bg-[#00d862] rounded-full text-black font-bold">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </Button>

                    </div>

                </div>

                {/* TEMAS */}
                <div className="flex justify-between items-center text-sm border-b border-zinc-600 px-4 py-4 bg-tranparent text-white cursor-pointer">
                    <div className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                        </svg>

                        <p className="text-white font-medium tracking-wide">Temas</p>
                    </div>
                    <Button size="sm" className="bg-transparent flex items-center space-x-1 text-white hover:bg-transparent focus:ring-0">
                        
                        <Themes />
                    </Button>
                </div>

                {/* TIMER RESPOSTAS */}
                <div className="flex justify-between items-center text-sm px-4 py-4 bg-transparent text-white cursor-pointer">
                    <div className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                        <p className="text-white font-medium tracking-wide">Timer</p>
                    </div>
                    <Button size="sm" className="bg-transparent flex items-center space-x-1 text-white hover:bg-transparent focus:ring-0">
                        <span>30s</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </Button>
                </div>
            </div>
        </>
    );
}

export default GameMode;