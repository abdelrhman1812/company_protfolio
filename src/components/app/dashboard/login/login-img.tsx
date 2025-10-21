import Image from "next/image";

const LoginImg = () => {
  return (
    <>
      <div className="flex justify-center -mt-16 mb-4 ">
        <div className="relative w-24 h-24 ">
          <Image
            src="/smartech_en.png"
            alt="Logo"
            layout="fill"
            objectFit="cover"
            className="rounded-full shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-primary/30 opacity-60 rounded-full"></div>
        </div>
      </div>
      ;
    </>
  );
};

export default LoginImg;
