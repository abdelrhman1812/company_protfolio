import { ItemsType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

const SingleWork = ({ item }: { item: ItemsType }) => {
  return (
    <div className="text-center p-5">
      <div className="relative w-[300px] mx-auto h-[300px] overflow-hidden p-5 rounded-full">
        <Image
          src={item.img}
          alt={item.title}
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-full"
        />
        <div className="absolute inset-0  rounded-full border-2 border-dashed border-gray-300 animate-[rotateIn-2_50s_linear_infinite] z-10 "></div>
        <div className="absolute bottom-[-50px] left-1/2 h-[120px] w-[120px] bg-primary rounded-full translate-x-[-50%] flex items-center justify-center z-30">
          <span className="text-[30px] text-white mb-10 leading-7">
            {"0" + item.id}
          </span>
        </div>
      </div>
      <Link href={`/projects/1`}>
        <h5 className="text-[27px] font-bold mt-9">{item.title}</h5>
        <p className="text-lightGray mt-2 leading-7">{item.description}</p>
      </Link>
    </div>
  );
};

export default SingleWork;
