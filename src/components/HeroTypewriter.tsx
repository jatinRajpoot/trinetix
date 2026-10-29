"use client";

import { useEffect, useState } from "react";

const words = ["different.", "premium."];
const holdDelay = 1800;

export default function HeroTypewriter() {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setTimeout>;
    let wordIndex = 0;
    let currentText = words[0];
    let deleting = true;

    const tick = () => {
      const word = words[wordIndex];
      currentText = deleting
        ? currentText.slice(0, -1)
        : word.slice(0, currentText.length + 1);
      setText(currentText);

      let delay = deleting ? 60 : 110;
      if (deleting && currentText.length === 0) {
        wordIndex = (wordIndex + 1) % words.length;
        deleting = false;
        delay = 250;
      } else if (!deleting && currentText === word) {
        deleting = true;
        delay = holdDelay;
      }
      timer = setTimeout(tick, delay);
    };

    const restart = () => {
      clearTimeout(timer);
      if (reduced.matches) {
        setText("premium.");
        return;
      }
      wordIndex = 0;
      currentText = words[0];
      deleting = true;
      setText(currentText);
      timer = setTimeout(tick, holdDelay);
    };

    restart();
    reduced.addEventListener("change", restart);
    return () => {
      clearTimeout(timer);
      reduced.removeEventListener("change", restart);
    };
  }, []);

  return (
    <span className="hero-last-word hero-typing" aria-hidden="true">
      <span className="hero-typing-space">different.</span>
      <span className="hero-typing-text">{text}<span className="hero-typing-caret" /></span>
    </span>
  );
}
