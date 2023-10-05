import { useRef } from "react";

import styles from "./App.module.css";

import useMousePosition from "./hooks/useMousePosition";

import Logo from "./components/Logo";

export default function App() {
  const mousePosition = useMousePosition();
  const eyeRef = useRef();

  const getAngle = () => {
    if (!eyeRef.current) {
      return;
    }

    const { left, top, width, height } = eyeRef.current.getBoundingClientRect();

    const x = left + width / 2;
    const y = top + height / 2;
    const rad = Math.atan2(mousePosition.x - x, mousePosition.y - y);
    const rot = rad * (180 / Math.PI) * -1 + 180;

    return rot;
  };

  return (
    <div className="w-full min-h-screen bg-bg font-sans text-text p-8 sm:p-16 flex flex-col justify-center">
      <Logo className="w-[100px] lg:w-[120px] stroke-text stroke-[8px] mb-auto" />
      <h1 id={styles.name} className="font-sans font-black leading-none">
        Andrew Brice
      </h1>
      <h2 id={styles.tagline} className="font-sans font-light">
        Software engineer with an{" "}
        <span
          id={styles.eye}
          style={{ transform: `rotate(${getAngle(eyeRef)}deg)` }}
          ref={eyeRef}
        />{" "}
        for design
      </h2>
    </div>
  );
}
