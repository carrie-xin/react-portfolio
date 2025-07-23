import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="fixed max-sm:hidden top-5 right-20 z-50">
      <button
        onClick={() => changeLanguage("en")}
        className={cn(
          "p-2 rounded-full transition-colors duration-300",
          i18n.language === "en" && "bg-primary text-primary-foreground"
        )}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("zh")}
        className={cn(
          "p-2 rounded-full transition-colors duration-300",
          i18n.language === "zh" && "bg-primary text-primary-foreground"
        )}
      >
        中文
      </button>
    </div>
  );
}; 