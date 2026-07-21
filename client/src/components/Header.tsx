import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "OverView", href: "#overview" },
    { label: "Study", href: "#study" },
    { label: "Tools", href: "#tools" },
    { label: "Results", href: "#results" },
    { label: "DashBoard", href: "#dashboard-showcase" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-accent/20 bg-background/80 backdrop-blur-xl">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <img
            src="images/logo.png"
            alt="logo Process"
            className="w-12 h-10 rounded-lg hover:scale-105 transition-transform duration-500"
          />
          <h1 className="text-lg font-bold gradient-text hidden sm:block">
            FLUDEX - RAY
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-foreground/70 hover:text-accent transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-card rounded-lg transition-colors"
        >
          {isMenuOpen ? (
            <X className="w-5 h-5 text-accent" />
          ) : (
            <Menu className="w-5 h-5 text-accent" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-accent/20 bg-background/95 backdrop-blur-xl">
          <nav className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm text-foreground/70 hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
