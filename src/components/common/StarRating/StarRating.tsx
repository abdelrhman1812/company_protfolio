"use client";
import { Star } from "lucide-react";

type StarRatingProps = {
  maxStars: number;
  rate: number;
  onRatingChange?: (rating: number) => void;
};

const StarRating = ({
  maxStars = 5,
  rate,
  onRatingChange,
}: StarRatingProps) => {
  const handleRating = (index: number) => {
    if (onRatingChange) {
      onRatingChange(index + 1);
    }
  };

  return (
    <div className="flex gap-1 items-center mt-2">
      {Array.from({ length: maxStars }, (_, index) => (
        <Star
          key={index}
          className={`${index < rate ? "text-yellow-400" : "text-gray-400"}`}
          fill="currentColor"
          size={20}
          onClick={() => handleRating(index)}
          style={{ cursor: onRatingChange ? "pointer" : "default" }}
        />
      ))}
    </div>
  );
};

export default StarRating;
