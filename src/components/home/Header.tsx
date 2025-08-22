import { Menu, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { Button } from "../ui/button"

export default function Header() {
  /**
   * ! STATE (état, données) de l'application
   */
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  /**
   * ! COMPORTEMENT (méthodes, fonctions) de l'application
   */
  const navigation = [
    { name: "Qui sommes-nous ?", href: "#qui-sommes-nous" },
    { name: "Ce que nous faisons", href: "#ce-que-nous-faisons" },
    { name: "Impliquez-vous", href: "#impliquez-vous" },
  ]

  /**
   * ! AFFICHAGE (render) de l'application
   */
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-gentle">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Hosodoko-ko logo"
              width={180}
              height={100}
              className="mt-2"
            />
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth"
              >
                {item.name}
              </a>
            ))}
            <Button variant="default" className="ml-4">
              Nous rejoindre
            </Button>
          </nav>

          {/* Menu Mobile */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Menu Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button variant="default" className="w-full">
                  Nous rejoindre
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
