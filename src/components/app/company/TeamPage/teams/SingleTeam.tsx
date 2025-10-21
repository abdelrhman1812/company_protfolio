"use client";

import { Facebook, Linkedin, Phone, Share2 } from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type TeamMember = {
  team: {
    id: number;
    img: string;
    name: string;
    job: string;
  };
};

export default function SingleTeam({ team }: TeamMember) {
  const [isHovered, setIsHovered] = useState(false);
  const locale = useLocale();

  if (!team) {
    return (
      <div className="text-center p-4 bg-gray-100 rounded-lg">
        Team member data not available
      </div>
    );
  }

  return (
    <div className="relative group overflow-hidden rounded-lg">
      {/* Img */}
      <Image
        src={team.img}
        width={450}
        height={405}
        alt={team.name}
        className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
      />
      {/* Name and job */}
      <div
        className={`absolute left-0 bottom-0 w-full flex justify-between items-end ${
          locale === "ar" && "flex-row-reverse "
        }`}
      >
        <div className="bg-white clip-path-custom px-4 py-1 w-[200px] transition-all duration-300 ">
          <Link
            rel="stylesheet"
            className={`block    ${locale === "ar" ? "text-end" : ""} `}
            href={`/teams/${team.id}`}
          >
            <h2 className="text-lg font-semibold text-gray-800">{team.name}</h2>
            <p className="text-sm text-gray-600">{team.job}</p>
          </Link>
        </div>
        {/* Shared icons */}
        <div className="relative">
          <button
            className="bg-primary p-4 text-white transition-all duration-300 "
            aria-label="Share"
          >
            <Share2
              className="w-6 h-6"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </button>
          {/* Social icons */}
          <div
            className={`absolute bottom-full  flex flex-col gap-3 p-3 bg-white transition-all duration-300 ${
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }`}
          >
            <button
              rel="stylesheet"
              className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Share on Facebook"
            >
              <Facebook className="w-5 h-5" />
            </button>
            <button
              className="bg-green-500 p-2 rounded-full text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
              aria-label="Share on WhatsApp"
            >
              <Phone className="w-5 h-5" />
            </button>
            <button
              className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
