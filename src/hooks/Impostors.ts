import { useEffect, useState } from "react";

// useImpostors.ts
export function useImpostors(maxPlayers: number) {
    const [impostors, setImpostors] = useState<number>(1);

    useEffect(() => {
        if (maxPlayers > 0 && impostors >= maxPlayers) {
            setImpostors(Math.max(1, maxPlayers - 1));
        }
    }, [maxPlayers]);

    const incrementImpostors = () => {
        setImpostors(prevCount => {
            const newValue = prevCount + 1;
            return newValue < maxPlayers ? newValue : prevCount;
        });
    }

    const decrementImpostors = () => {
        setImpostors(prevCount => prevCount > 1 ? prevCount - 1 : prevCount);
    }

    return {
        incrementImpostors,
        decrementImpostors,
        impostors
    }
}