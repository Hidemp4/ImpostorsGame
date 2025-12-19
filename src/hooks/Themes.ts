import { useState } from "react";

export function useTheme() {

    const [focusBtn, setFocusBtn] = useState<boolean>(false);

    const btnSelected = focusBtn
        ? "bg-[#012b1f] scale-[0.95]"
        : "bg-[#1b1b27]";

    return { focusBtn, setFocusBtn, btnSelected };
}