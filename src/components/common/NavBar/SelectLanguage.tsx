/* eslint-disable @next/next/no-img-element */
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";

const countries = [
  {
    value: "en",
    label: "English",
    flag: "https://readymadeui.com/usa_flag.webp",
  },
  {
    value: "ar",
    label: "العربيه",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg",
  },
];

export function SelectLanguage() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const handleLanguage = (value: string) => {
    router.replace("/" + pathname.split("/").slice(2).join("/"), {
      locale: value,
    });
  };

  return (
    <Select defaultValue={locale} onValueChange={handleLanguage}>
      <SelectTrigger
        className="hidden md:flex w-[180px] p-5 border-0 focus:border-0 outline-none text-black"
        aria-label="Select a country"
      >
        <SelectValue placeholder="Select a country" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Countries</SelectLabel>
          {countries.map((country) => (
            <SelectItem key={country.value} value={country.value}>
              <div className="flex items-center space-x-2">
                <img
                  src={country.flag}
                  alt={`${country.label} flag`}
                  className="w-5 h-5 rounded"
                />
                <p>{country.label}</p>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
