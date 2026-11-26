import { useState, useEffect } from "react";

/**
 * Cycles through an array of strings with a smooth typing and deleting effect.
 */
export function useTypingEffect(
  words = [],
  { typingSpeed = 85, deletingSpeed = 48, pauseDuration = 1700 } = {},
) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return undefined;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setDisplayText(words[0]);
      return undefined;
    }

    const currentWord = words[wordIndex % words.length];
    let timeoutId;

    if (!isDeleting && displayText === currentWord) {
      timeoutId = window.setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timeoutId = window.setTimeout(() => {
        const nextLength = displayText.length + (isDeleting ? -1 : 1);
        setDisplayText(currentWord.slice(0, nextLength));
      }, speed);
    }

    return () => window.clearTimeout(timeoutId);
  }, [
    words,
    wordIndex,
    displayText,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return displayText;
}
