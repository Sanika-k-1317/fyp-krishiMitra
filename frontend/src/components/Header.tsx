import { Button } from "@/components/ui/button";
import { Menu, Globe } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  const [language, setLanguage] = useState("English");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">🌾</span>
            </div>
            <span className="font-bold text-xl text-foreground">KrishiMitra</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">{language}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage("English")}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("हिंदी")}>
                हिंदी (Hindi)
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("मराठी")}>
                मराठी (Marathi)
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("తెలుగు")}>
                తెలుగు (Telugu)
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("ગુજરાતી")}>
                ગુજરાતી (Gujarati)
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};
