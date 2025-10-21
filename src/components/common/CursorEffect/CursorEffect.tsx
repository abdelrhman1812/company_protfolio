"use client";
import { useEffect } from "react";

const CursorEffect = () => {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);

    const updateCursorPosition = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      if (document.body.contains(cursor)) {
        document.body.removeChild(cursor);
      }
    };
  }, []);

  return null;
};

export default CursorEffect;

const CursorEffectProjects = ({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
}) => {
  useEffect(() => {
    const cursor = document.createElement("div");
    const cursorText = document.createElement("p");
    cursorText.classList.add("cursor-text");
    cursorText.textContent = " View Projects";
    cursor.appendChild(cursorText);

    cursor.classList.add("cursor-projects");

    document.body.appendChild(cursor);

    const updateCursorPosition = (e: MouseEvent) => {
      if (containerRef.current) {
        const bounds = containerRef.current.getBoundingClientRect();

        if (
          e.clientX >= bounds.left &&
          e.clientX <= bounds.right &&
          e.clientY >= bounds.top &&
          e.clientY <= bounds.bottom
        ) {
          cursor.style.display = "block";
          cursor.style.left = `${e.clientX}px`;
          cursor.style.top = `${e.clientY}px`;
        } else {
          cursor.style.display = "none";
        }
      }
    };

    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      if (document.body.contains(cursor)) {
        document.body.removeChild(cursor);
      }
    };
  }, [containerRef]);

  return null;
};

export { CursorEffectProjects };
