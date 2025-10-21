import Image from "next/image";

const QuestionImg = () => {
  return (
    <section className="hidden md:block">
      <Image
        src={"/Image/Questions/faq-1.png"}
        width={580}
        height={540}
        alt="Image"
        className="object-cover"
        quality={100}
      />
    </section>
  );
};

export default QuestionImg;
