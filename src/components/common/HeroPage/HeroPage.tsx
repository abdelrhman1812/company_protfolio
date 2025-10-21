import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

interface BackgroundStyleProps {
  imageUrl: string;
  size?: string;
  position?: string;
  repeat?: string;
}

const generateBackgroundStyle = ({
  imageUrl,
  size = "cover",
  position = "center",
  repeat = "no-repeat",
}: BackgroundStyleProps): React.CSSProperties => ({
  backgroundImage: `url('${imageUrl}')`,
  backgroundSize: size,
  backgroundPosition: position,
  backgroundRepeat: repeat,
});

interface HeroPageProps {
  title?: string;
  subtitle?: string;
  imageUrl: string;
  height?: string;
  textColor?: string;
  path: string;
}

const HeroPage: React.FC<HeroPageProps> = ({
  title,
  subtitle,
  imageUrl,
  height = "50vh",
  textColor = "white",
  path,
}) => {
  const heroStyle = generateBackgroundStyle({
    imageUrl,
    size: "cover",
    position: "center",
    repeat: "no-repeat",
  });

  const t = useTranslations("Services.ServicesDetails");

  return (
    <section
      className="flex items-center overflow-hidden justify-center text-center"
      style={{
        ...heroStyle,
        minHeight: height,
      }}
    >
      <div className="border border-white/10 min-w-[630px] mx-auto px-10 py-8 rounded-lg backdrop-blur-sm bg-transparent mt-[150px] relative overflow-hidden">
        {title && (
          <h1 className={`text-[40px] font-bold text-${textColor}`}>{title}</h1>
        )}
        {subtitle && (
          <p className={`mt-4 text-lg text-${textColor}`}>{subtitle}</p>
        )}
        <ul className="flex gap-3 text-white my-5 justify-center ">
          <li>
            <Link href={"/"} className="flex gap-2 hover:text-primary">
              <span> {t("home")} </span>
              <ChevronRight />
            </Link>
          </li>
          <li className="hover:text-primary">
            <Link href={path}>{title}</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HeroPage;
