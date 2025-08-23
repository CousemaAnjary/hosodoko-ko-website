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
    { name: "Galerie", href: "#galerie" },
  ]

  const services = [
    { name: "Ateliers créatifs", href: "#" },
    { name: "Sensibilisation écologique", href: "#" },
    { name: "Création des œuvres", href: "#" },
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
            {/* <div className="flex flex-col items-start mb-6">
              <div
                className="w-20 h-20 bg-cover bg-center bg-no-repeat rounded-full mb-4"
                style={{ backgroundImage: "url('/images/logo.png')" }}
              />
            </div> */}
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

        {/* Contact uniquement */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Informations de contact */}
            <div className="lg:col-span-2">
              <h4 className="text-xl font-semibold mb-6 text-white">
                Contactez-nous
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600/20 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Adresse</p>
                    <p className="text-gray-300">Antananarivo, Madagascar</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600/20 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Email</p>
                    <a
                      href="mailto:contact@hosodoko-ko.mg"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      contact@hosodoko-ko.mg
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600/20 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Téléphone</p>
                    <a
                      href="tel:+261123456789"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      +261 12 34 567 89
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">
                Suivez-nous
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors duration-200 group"
                  >
                    <social.icon
                      className={`w-5 h-5 text-gray-400 group-hover:text-white transition-colors`}
                    />
                    <span className="text-gray-300 group-hover:text-white transition-colors text-sm font-medium">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section bas de page */}
      <div className="border-t border-gray-800 bg-black/50">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <div className="text-gray-400 text-sm">
              <p>&copy; 2025 Tous droits réservés.</p>
              <p className="mt-1">Fait avec ❤️ pour l&apos;environnement</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
