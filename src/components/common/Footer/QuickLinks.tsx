import { quickLinks } from "@/data/mock-footer";
import { typeT } from "@/lib/types";

const QuickLinks = ({ t }: { t: typeT }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-6">
        {t("Footer.quick_link")}
      </h3>
      <ul className="space-y-3">
        {quickLinks(t).map((link) => (
          <li key={link.title}>
            <a
              href={link.href}
              className="text-white hover:text-primary transition-colors"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;
