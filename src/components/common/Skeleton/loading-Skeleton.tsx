"use client";

import { useEffect, useState } from "react";

interface IsLoadingProps {
  count?: number;
  columns?: number;
  height?: number;
  width?: string;
}

export default function IsLoading({
  count = 8,
  columns = 4,
  height = 200,
  width = "full",
}: IsLoadingProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-5 mt-8`}
    >
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <div key={index} className={`w-${width}`}>
            <div
              className="bg-gray-200 rounded animate-pulse"
              style={{ height: `${height}px` }}
            />
          </div>
        ))}
    </div>
  );
}
