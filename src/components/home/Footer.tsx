import {
  Facebook,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Recycle,
  Twitter,
} from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"

export default function Footer() {
  /**
   * ! STATE (état, données) de l'application
   */
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "#",
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "hover:text-pink-500",
    },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
      color: "hover:text-blue-700",
    },
  ]

  const quickLinks = [
    { name: "Qui sommes-nous ?", href: "#qui-sommes-nous" },
    { name: "Ce que nous faisons", href: "#ce-que-nous-faisons" },
    { name: "Impliquez-vous", href: "#impliquez-vous" },
    { name: "Galerie", href: "#galerie" },
  ]

  const services = [
    { name: "Ateliers créatifs", href: "#" },
    { name: "Sensibilisation écologique", href: "#" },
    { name: "Création d&apos;œuvres", href: "#" },
    { name: "Formation environnementale", href: "#" },
  ]

  /**
   * ! COMPORTEMENT (méthodes, fonctions) de l'application
   */

  /**
   * ! AFFICHAGE (render) de l'application
   */
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Section principale */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* À propos */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/images/logo.png"
                alt="Hosodoko-ko logo"
                width={48}
                height={48}
                className="rounded-full"
              />
              <h3 className="text-2xl font-bold">Hosodoko-ko</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Nous transformons les déchets en œuvres d&apos;art inspirantes
              pour sensibiliser à la protection de l&apos;environnement et
              promouvoir l&apos;écocitoyenneté.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-red-400" />
                <span>Art avec Impact</span>
              </div>
              <div className="flex items-center space-x-2">
                <Recycle className="w-4 h-4 text-green-400" />
                <span>Écologie</span>
              </div>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nos Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact et Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 pt-8 border-t border-gray-800">
          {/* Informations de contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contactez-nous</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>Antananarivo, Madagascar</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:contact@hosodoko-ko.mg"
                  className="hover:text-white transition-colors"
                >
                  contact@hosodoko-ko.mg
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a
                  href="tel:+261123456789"
                  className="hover:text-white transition-colors"
                >
                  +261 12 34 567 89
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Restez informé</h4>
            <p className="text-gray-300 mb-4">
              Recevez nos dernières actualités et découvrez nos nouvelles
              créations.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 px-6">
                S&apos;abonner
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Section bas de page */}
      <div className="border-t border-gray-800 bg-black/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>&copy; 2025 Hosodoko-ko. Tous droits réservés.</p>
              <p className="mt-1">Fait avec ❤️ pour l&apos;environnement</p>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm mr-2">Suivez-nous :</span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-colors duration-200 p-2 hover:bg-gray-800 rounded-full`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
