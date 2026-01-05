import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-2">Sun Ranch</h3>
            <p className="text-primary-foreground/70 text-sm">
              {t.footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-accent transition">{t.nav.about}</a></li>
              <li><a href="#services" className="hover:text-accent transition">{t.nav.services}</a></li>
              <li><a href="#gallery" className="hover:text-accent transition">{t.nav.gallery}</a></li>
              <li><a href="#hours" className="hover:text-accent transition">{t.nav.hours}</a></li>
              <li><a href="#contact" className="hover:text-accent transition">{t.nav.contact}</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">{t.footer.about}</h4>
            <p className="text-primary-foreground/70 text-sm">
              {t.footer.description}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Sun Ranch. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
