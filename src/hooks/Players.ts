import { useEffect, useState } from "react";

export function usePlayers() {
    const [players, setPlayers] = useState<string[]>([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("players");
        if (saved) setPlayers(JSON.parse(saved));
        setLoaded(true);
    }, []);

    useEffect(() => {
        if (loaded) {
            localStorage.setItem("players", JSON.stringify(players));
        }
    }, [players, loaded]);

    return {
        players,
        loaded,
        addPlayer: (name: string) =>
            setPlayers(prevPlayers => [...prevPlayers, name]),
        deletePlayer: (id: number) =>
            setPlayers(prevPlayers => prevPlayers.filter((_, index) => index !== id))
    }
}