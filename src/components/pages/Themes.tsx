
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useTheme } from "@/hooks/Themes";
import { themesArray } from "@/components/questions/theme";

const Themes = () => {

    const { focusBtn, setFocusBtn, btnSelected } = useTheme();
    
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button size="sm" className="bg-transparent flex items-center space-x-1 text-white hover:bg-transparent focus:ring-0">
                        <span>{11}</span>
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
                            <DialogTitle>Selecionar Tema</DialogTitle>
                            <DialogDescription>
                                Escolha um tema para jogar!
                            </DialogDescription>
                        </DialogHeader>
                    </div>

                    <ul className="w-full h-full grid grid-items grid-cols-2 grid-rows-4 gap-2">
                        {/* MODELO */}
                        {themesArray.map(item => (
                            <li
                                onClick={() => setFocusBtn(prev => !prev)}
                                key={item.id}
                                className={`themes ${btnSelected} transition-all duration-300 span-col-1 row-span-1 bg-[#1b1b27] rounded-2xl flex flex-col items-center justify-center p-4 space-y-1 relative`}
                            >
                                {focusBtn && (
                                    <div className="w-full h-full flex justify-end transition-all duration-300">
                                        <span className="bg-[#04ca55] rounded-full absolute">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 p-1">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                            </svg>
                                        </span>
                                    </div>
                                )}

                                {item.img}

                                <p className="text-white font-semibold">{item.title}</p>
                            </li>
                        ))}
                    </ul>
                </DialogContent>
            </form>
        </Dialog >
    );
}

export default Themes;