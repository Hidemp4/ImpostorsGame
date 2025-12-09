import { useState } from "react";

export function useImpostors() {

    const [countImpostors, setCountImpostors] = useState<number>(1);

    const incrementImpostors = () => {
        setCountImpostors(prevCount => prevCount + 1)
    }

    const decrementImpostors = () => {
        if (countImpostors > 0) {
            setCountImpostors(prevCount => prevCount - 1)
        }
    }

    return {
        incrementImpostors,
        decrementImpostors,
        countImpostors
    }
}

export default useImpostors;