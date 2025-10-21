"use client";
import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollPosition / scrollHeight) * 100;
      setScroll(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed ${
        scroll > 0 ? "opacity-100" : "opacity-0"
      } top-0 left-0 w-full h-1 bg-gray-200 z-50`}
    >
      <div className="h-full bg-primary" style={{ width: `${scroll}%` }}></div>
    </div>
  );
};

export default ProgressBar;
