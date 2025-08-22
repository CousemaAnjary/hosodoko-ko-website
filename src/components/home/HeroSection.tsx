import { ArrowRight, Heart, Recycle, Users } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"

export default function HeroSection() {
  /**
   * ! STATE (état, données) de l'application
   */

  /**
   * ! COMPORTEMENT (méthodes, fonctions) de l'application
   */

  /**
   * ! AFFICHAGE (render) de l'application
   */
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Image de fond avec overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-art-recycling.jpg"
          alt="Art créé à partir de matériaux recyclés"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-green-800/80"></div>
      </div>

      {/* Contenu */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
            <Recycle className="w-4 h-4 mr-2" />
            Art • Environnement • Innovation
          </div>

          {/* Titre principal */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight font">
            L&apos;art au service de
            <span className="block text-transparent bg-gradient-to-r from-blue-200 to-green-200 bg-clip-text">
              l&apos;environnement
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-inter">
            Hosodoko-ko transforme les déchets en œuvres d&apos;art inspirantes
            pour sensibiliser à la protection de l&apos;environnement et
            promouvoir l&apos;écocitoyenneté.
          </p>

          {/* Statistiques rapides */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto my-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Heart className="w-8 h-8 mx-auto mb-2 text-coral-orange" />
              <div className="text-2xl font-bold">100+</div>
              <div className="text-sm text-blue-200">Œuvres créées</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Recycle className="w-8 h-8 mx-auto mb-2 text-green-300" />
              <div className="text-2xl font-bold">5T</div>
              <div className="text-sm text-blue-200">Déchets valorisés</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
              <div className="text-2xl font-bold">1000+</div>
              <div className="text-sm text-blue-200">
                Personnes sensibilisées
              </div>
            </div>
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-elevated transition-bounce group"
            >
              Découvrir nos œuvres
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary transition-smooth"
            >
              Notre mission
            </Button>
          </div>
        </div>
      </div>

      {/* Flèche vers le bas */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
