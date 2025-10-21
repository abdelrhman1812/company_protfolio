"use client";

import { Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export function Newsletter() {
  const t = useTranslations("");

  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribe:", email);
  };

  return (
    <div className="bg-slate-800 p-4 md:p-8 rounded-lg mb-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          {t("Footer.subscribe_to_newsletter")}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row  gap-y-6 w-full md:items-center  md:justify-end md:w-1/2 gap-2"
        >
          <input
            type="email"
            placeholder={t("form.placeholders.email")}
            className="bg-transparent border-b px-3 py-2 border-slate-700 w-full md:w-1/2 text-white focus:border-primary focus:outline-none transition duration-200"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-red-500 gap-x-2  py-3 px-4 rounded w-[200px] flex items-center justify-center focus:border-b-primary  hover:bg-red-600 text-white whitespace-nowrap"
          >
            {t("Footer.subscribe_now")}
            <Send className=" h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
