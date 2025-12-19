
import imgClash from "@/assets/img/clash-royale.png"
import type { ReactNode } from "react";

interface themeArrayType {
    id: number
    img: ReactNode
    title: string
}

export const themesArray: themeArrayType[] = [
    {
        id: 1,
        img: <img src={imgClash} alt="Clash Royale" className="size-20" />,
        title: "Clash Royale"
    },
    {
        id: 2,
        img: <img src={imgClash} alt="Clash Royale" className="size-20" />,
        title: "Outro tema"
    }
];