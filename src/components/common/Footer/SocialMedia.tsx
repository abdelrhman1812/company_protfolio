import { SocialLink } from "@/lib/types";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const socialLinks: SocialLink[] = [
  { platform: "Facebook", url: "/" },
  { platform: "LinkedIn", url: "/" },
  { platform: "Twitter", url: "/" },
  { platform: "Instagram", url: "/" },
];

const SocialMedia = () => {
  return (
    <div className="flex gap-2">
      {socialLinks.map((link) => (
        <a
          key={link.platform}
          href={link.url}
          className="p-2 bg-slate-800 text-white hover:bg-primary transition-colors rounded-lg"
        >
          {link.platform === "Facebook" && <Facebook className="h-5 w-5" />}
          {link.platform === "LinkedIn" && <Linkedin className="h-5 w-5" />}
          {link.platform === "Twitter" && <Twitter className="h-5 w-5" />}
          {link.platform === "Instagram" && <Instagram className="h-5 w-5" />}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
