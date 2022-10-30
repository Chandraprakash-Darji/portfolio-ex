import { useEffect, useState } from 'react';

function useInterval(
  f: () => void,
  delay = 1000
): [() => void, () => void, boolean] {
  const [busy, setBusy] = useState(false);

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
  }, [busy, delay, f]);

  return [
    () => setBusy(true), // start
    () => setBusy(false), // stop
    busy, // isBusy
  ];
}
export default useInterval;
