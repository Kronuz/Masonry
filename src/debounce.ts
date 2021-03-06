/**
 * debounce prevents a particular function from being called until after a given
 * cooldown period (default 100ms). Every time the function is called, it resets
 * the cooldown.
 */

export default function debounce(
  fn: (...args: any[]) => void,
  threshhold: number = 100
): {
  (...args: any[]): void;
  clearTimeout(): void;
} {
  let deferTimer: any;
  const debounced: any = (...args: any[]) => {
    if (deferTimer) {
      clearTimeout(deferTimer);
    }

    deferTimer = setTimeout(() => {
      deferTimer = null;
      fn(...args);
    }, threshhold);
  };

  debounced.clearTimeout = () => {
    if (deferTimer) {
      clearTimeout(deferTimer);
    }
  };

  return debounced;
}
