import Image from "next/image";
import Link from "next/link";
import logoImg from "../../../../public/smartech_en.png";
const Logo = () => {
  return (
    <figure>
      <Link href="/">
        <Image
          className="w-20 md:w-full "
          src={logoImg}
          alt="logo"
          width={125}
          height={66}
        />
      </Link>
    </figure>
  );
};

export default Logo;
