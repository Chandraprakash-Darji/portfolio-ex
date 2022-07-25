import { useEffect, useState } from "react";

function useInterval(f, delay = 1000) {
    const [busy, setBusy] = useState(0);

    useEffect(() => {
        // start
        if (!busy) return;
        setBusy(true);
        const t = setInterval(f, delay);
        // stop
        return () => {
            setBusy(false);
            clearInterval(t);
        };
    }, [busy, delay,f]);

    return [
        (_) => setBusy(true), // start
        (_) => setBusy(false), // stop
        busy, // isBusy
    ];
}
export default useInterval;
