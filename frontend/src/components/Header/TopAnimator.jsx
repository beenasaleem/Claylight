import { useEffect, useState } from "react";

const messages = [
  "Free U.S. shipping on orders over $35",
  "New scented candles just dropped ✨",
  "Limited edition decorative candles",
  "Sale is live – don’t miss out!",
];

export default function TopAnimator() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("idle"); // idle | slide

  useEffect(() => {
    const idleTimer = setTimeout(() => {
      setPhase("slide");
    }, 5000);

    const slideTimer = setTimeout(() => {
      setPhase("idle");
      setIndex((prev) => (prev + 1) % messages.length);
    }, 7000); // 5s wait + 2s animation

    return () => {
      clearTimeout(idleTimer);
      clearTimeout(slideTimer);
    };
  }, [index]);

  return (
    <div className="w-full bg-pink-400 h-10 overflow-hidden relative">
      <div
        className={`absolute whitespace-nowrap text-white text-sm font-medium ${
          phase === "idle"
            ? "left-1/2 -translate-x-1/2"
            : "left-0 animate-slide"
        }`}
      >
        {messages[index]}
      </div>
    </div>
  );
}
