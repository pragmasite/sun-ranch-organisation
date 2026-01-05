import { useState } from "react";
import { Link } from "react-router-dom";
import { Globe, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Header = () => {
  const { t, otherLang, otherLangPath } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Listen for scroll
  window.addEventListener("scroll", () => {
    setIsScrolled(window.scrollY > 50);
  });

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="#" className="flex flex-col">
          <span
            className={`font-serif text-xl font-bold ${
              isScrolled ? "text-primary" : "text-white"
            }`}
          >
            Sun Ranch
          </span>
          <span
            className={`text-xs tracking-widest ${
              isScrolled ? "text-muted-foreground" : "text-white/70"
            }`}
          >
            {t.nav.profession}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className={`text-sm font-medium ${
            isScrolled ? "text-foreground" : "text-white"
          } hover:text-primary transition`}>
            {t.nav.about}
          </a>
          <a href="#services" className={`text-sm font-medium ${
            isScrolled ? "text-foreground" : "text-white"
          } hover:text-primary transition`}>
            {t.nav.services}
          </a>
          <a href="#gallery" className={`text-sm font-medium ${
            isScrolled ? "text-foreground" : "text-white"
          } hover:text-primary transition`}>
            {t.nav.gallery}
          </a>
          <a href="#hours" className={`text-sm font-medium ${
            isScrolled ? "text-foreground" : "text-white"
          } hover:text-primary transition`}>
            {t.nav.hours}
          </a>
          <a href="#contact" className={`text-sm font-medium ${
            isScrolled ? "text-foreground" : "text-white"
          } hover:text-primary transition`}>
            {t.nav.contact}
          </a>

          {/* Language Switcher */}
          <Link
            to={otherLangPath}
            className={`flex items-center gap-1.5 text-sm font-medium ${
              isScrolled ? "text-foreground" : "text-white"
            } hover:text-primary transition`}
          >
            <Globe className="h-4 w-4" />
            {otherLang.toUpperCase()}
          </Link>

          <Button asChild className="gap-2">
            <a href="tel:+41767248801">
              <Phone className="h-4 w-4" />
              {t.nav.call}
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <Link
            to={otherLangPath}
            className={`flex items-center gap-1.5 text-sm ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            <Globe className="h-4 w-4" />
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={isScrolled ? "text-foreground" : "text-white"}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-4">
            <a href="#about" className="text-sm font-medium hover:text-primary">
              {t.nav.about}
            </a>
            <a href="#services" className="text-sm font-medium hover:text-primary">
              {t.nav.services}
            </a>
            <a href="#gallery" className="text-sm font-medium hover:text-primary">
              {t.nav.gallery}
            </a>
            <a href="#hours" className="text-sm font-medium hover:text-primary">
              {t.nav.hours}
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary">
              {t.nav.contact}
            </a>
            <Button asChild className="w-full gap-2">
              <a href="tel:+41767248801">
                <Phone className="h-4 w-4" />
                {t.nav.call}
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
