import { Play } from "lucide-react";

type PlayBtnProps = {
  bgColor: string;
  textColor: string;
};

const PlayBtn = ({ bgColor, textColor }: PlayBtnProps) => {
  return (
    <>
      <div
        className={`w-12 h-12 ${bgColor} rounded-full flex items-center justify-center shadow-lg animate-shadow`}
      >
        <Play size={18} className={`${textColor}`} />
      </div>
    </>
  );
};

export default PlayBtn;
