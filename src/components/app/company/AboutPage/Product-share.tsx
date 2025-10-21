import { Star } from "lucide-react";
import Image from "next/image";
import share1 from "../../../../../public/Image/About/4.png";
import share2 from "../../../../../public/Image/About/5.png";
import share3 from "../../../../../public/Image/About/6.png";
import share4 from "../../../../../public/Image/About/7.png";

const ProductShare = () => {
  return (
    <div className="relative">
      <div className="absolute bottom-[-35px] left-12 bg-white rounded p-7 shadow z-10">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold">4.3</span>
          <span className="flex gap-1">
            <Star fill="#E42032" className="text-primary" />
            <Star fill="#E42032" className="text-primary" />
            <Star fill="#E42032" className="text-primary" />
            <Star fill="#E42032" className="text-primary" />
          </span>
        </div>
        <div className="flex my-2 justify-center">
          <Image
            className="rounded-full border-2 hover:border-primary hover:scale-105 transition-all duration-300"
            src={share1}
            alt="User 1"
            width={40}
            height={40}
            priority
          />
          <Image
            className="rounded-full border-2 hover:border-primary hover:scale-105 transition-all duration-300"
            src={share2}
            alt="User 2"
            width={40}
            height={40}
          />
          <Image
            className="rounded-full border-2 hover:border-primary hover:scale-105 transition-all duration-300"
            src={share3}
            alt="User 3"
            width={40}
            height={40}
          />
          <Image
            className="rounded-full border-2 hover:border-primary hover:scale-105 transition-all duration-300"
            src={share4}
            alt="User 4"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductShare;
