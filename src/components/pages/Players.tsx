
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
    DialogFooter
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { usePlayers } from "@/hooks/Players";
import { useState } from "react";

const Players = () => {

    const { addPlayer, deletePlayer, players } = usePlayers();
    const [namePlayer, setNamePlayer] = useState("")

    return (
        <>
            <Dialog>
                <form>
                    <DialogTrigger asChild>
                        <Button size="sm" className="bg-transparent flex items-center space-x-1 text-white hover:bg-transparent focus:ring-0">
                            <span>{players.length}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="flex flex-col w-full h-screen">
                        <div className="mt-10 space-y-4">
                            <div className="flex justify-center items-end">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-20 text-white">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                </svg>
                            </div>
                            <DialogHeader>
                                <DialogTitle>Adicionar Jogadores</DialogTitle>
                                <DialogDescription>
                                    3-24 jogadores
                                </DialogDescription>
                                <span className="text-[#00d862]">Jogadores - {players.length}</span>
                            </DialogHeader>
                        </div>

                        <div className="w-full h-full flex-1">
                            {/* MODELO */}
                            {players.length === 0 ? (
                                <p className="text-white text-center">Adicione jogadores para sua partida!</p>
                            ) : (
                                players.map((player, idx) => (
                                    <ul className="flex gap-2 items-center space-y-3">
                                        <li key={idx} className="flex flex-1 justify-between bg-[#1b1b27] px-3 py-4 rounded-xl items-center">
                                            <div className="flex space-x-4 pl-2 items-center">
                                                <span className="bg-[#5e5e68] rounded-full p-1 text-[#1b1b25]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                                                        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                                                    </svg>
                                                </span>

                                                <p className="text-white font-semibold text-lg tracking-wide">{player}</p>
                                            </div>
                                        </li>

                                        <Button
                                            onClick={() => deletePlayer(idx)}
                                            className="bg-transparent hover:bg-transparent focus:ring-0 cursor-pointer flex text-[#ff1a40] pb-1"
                                            size="sm"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8 font-black">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                            </svg>
                                        </Button>
                                    </ul>
                                ))
                            )
                            }
                        </div>

                        <div className="absolute bottom-0 left-0 w-full">
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button className="bg-[#45454f] font-extrabold text-xl rounded-xl w-full h-14 tracking-wide focus:bg-[#363640] focus:scale-[.95] focus:text-[#bbbdbe] hover:bg-[#45454f] cursor-pointer">Fechar</Button>
                                </DialogClose>

                                <div className="flex items-center w-full">
                                    <Input
                                        className="flex-1 bg-[#000711] p-6 rounded-xl border border-zinc-700  text-white font-semibold tracking-wide placeholder:text-[#5e5e68] placeholder:font-bold placeholder:tracking-wide"
                                        placeholder="Adicionar Jogador"
                                        value={namePlayer}
                                        onChange={e => setNamePlayer(e.target.value)}
                                    />

                                    <Button
                                        onClick={() => {
                                            addPlayer(namePlayer);
                                            setNamePlayer("");}
                                        }
                                        className={`bg-transparent hover:bg-transparent focus:ring-0 cursor-pointer flex text-[#00d862]`}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-15">
                                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd" />
                                        </svg>
                                    </Button>
                                </div>
                            </DialogFooter>
                        </div>
                    </DialogContent>
                </form>
            </Dialog >
        </>
    );
}

export default Players;