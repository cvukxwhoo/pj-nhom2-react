import React from "react";
import Typed from "typed.js";
import { useRef, useEffect } from "react";

function TextRun() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["<i>Adventure</i>", "World Tours", "Jungle Safaris"],
      typeSpeed: 120,
      loop: true,
      backDelay: 1500,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="text-run">
      <span ref={el} />
    </div>
  );
}

export default TextRun;
