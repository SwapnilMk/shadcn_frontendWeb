import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, Check } from "lucide-react";
import { useTranslation } from "react-i18next";

export function LanguageToggle() {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const currentLanguage = i18n.language;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="ghost mx-2 px-6">
          <Globe />
          <span>{currentLanguage.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {[
          { code: "en", label: "English (English)" },
          { code: "hi", label: "Hindi (हिंदी)" },
          { code: "mr", label: "Marathi (मराठी)" },
          { code: "ta", label: "Tamil (தமிழ்)" },
          { code: "te", label: "Telugu (తెలుగు)" },
          { code: "bn", label: "Bengali (বাংলা)" },
          { code: "pa", label: "Punjabi (ਪੰਜਾਬੀ)" },
          { code: "gu", label: "Gujarati (ગુજરાતી)" },
          { code: "kn", label: "Kannada (ಕನ್ನಡ)" },
          { code: "ml", label: "Malayalam (മലയാളം)" },
          { code: "or", label: "Oriya (ଓଡ଼ିଆ)" },
        ].map(({ code, label }) => (
          <DropdownMenuItem key={code} onClick={() => changeLanguage(code)}>
            {currentLanguage === code && <Check className="w-5 h-5" />}
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
