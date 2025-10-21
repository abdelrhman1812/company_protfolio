import { AlarmClockCheck } from "lucide-react";
import Image from "next/image";

import { recentPosts } from "@/data/mock-footer";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Newsletter } from "./Newsletter";
import OfficialInfo from "./OfficialInfo";
import QuickLinks from "./QuickLinks";
import { RecentPosts } from "./RecentPosts";
import SocialMedia from "./SocialMedia";
import logoImg from "../../../../public/smartech_en.png";
const footerStyle = {
  backgroundImage: "url('/Image/Footer/bg-01 (1).png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
const Footer = () => {
  const t = useTranslations("");

  return (
    <div>
      <footer style={footerStyle} className="py-[120px] overflow-hidden">
        <div className="container mx-auto px-4">
          <Newsletter />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
            {/* Company Info */}
            <div>
              <Image
                src={logoImg}
                alt="logo"
                width={150}
                height={50}
                className="mb-6 object-cover"
              />
              <p className="text-white mb-6">{t("companyDescription")}</p>
              {/* Opening Hours */}
              <div className="flex items-center text-white mb-4">
                <div className="flex items-center gap-3">
                  <AlarmClockCheck className="h-10 w-10" />
                  <div className="space-y-2">
                    <p className="font-semibold">
                      {t("openingHours.sundayToThursday")}{" "}
                    </p>
                    <p> {t("openingHours.openingHours")}</p>
                  </div>
                </div>
              </div>
              {/* Social Media */}
              <SocialMedia />
            </div>

            {/* Quick Links */}
            <QuickLinks t={t} />

            {/* Recent Posts */}
            <RecentPosts posts={recentPosts} t={t} />

            {/* Official Info */}
            <OfficialInfo t={t} />
          </div>
        </div>
      </footer>
      {/* Copyright */}
      <div className=" bg-[#353950] px-2 md:px-0 py-5  text-center text-white">
        <p>
          {t("Footer.copyright")}
          <Link href="/" className="text-red-500 mx-2 hover:underline">
            Abdelrhman{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
