import { useRef } from "react";

import styles from "./Eye.module.css";
import useMousePosition from "../hooks/useMousePosition";

export default function Eye() {
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
    <div id={styles.eye}>
      <div
        id={styles.eyeball}
        style={{ transform: `rotate(${getAngle(eyeRef)}deg)` }}
        ref={eyeRef}
      >
        <div id={styles.pupil} />
      </div>
    </div>
  );
}
