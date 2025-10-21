import { servicesItem } from "@/lib/types";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SingleItemService = ({ item }: { item: servicesItem }) => {
  return (
    <div className="service-item shadow rounded-xl p-7 relative overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300">
      <div className="mb-[30px]">
        <div className="image mb-5">
          <Image src={item.img} alt={item.title} width={70} height={80} />
        </div>
        <h3 className="text-xl text-secondary mb-5 font-semibold hover:text-primary cursor-pointer ">
          {item.title}
        </h3>
        <p className="text-lightGray leading-7">{item.description}</p>

        <div className="mt-5 border border-secondary rounded-full flex items-center justify-center w-[40px] h-[40px] hover:bg-primary hover:scale-105 hover:border-0 group transition-transform duration-300">
          <Link href={"/services/1"}>
            <ArrowUpRight
              className="text-secondary group-hover:text-white transition-transform duration-300"
              size={18}
            />
          </Link>
        </div>
      </div>
      <div className="icon absolute right-[40px] bottom-[-35px]  ">
        <Image src={item.num} alt="Icon" width={92} height={106} />
      </div>
    </div>
  );
};

export default SingleItemService;