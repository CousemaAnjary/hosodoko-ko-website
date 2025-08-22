import { Eye } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"

export default function GallerySection() {
  /**
   * ! STATE (état, données) de l'application
   */
  const galleryImages = [
    {
      id: 1,
      src: "/images/gallery-1.jpg",
      alt: "Poisson coloré créé à partir de matériaux recyclés",
      title: "Poisson Arc-en-ciel",
      category: "Sculpture Marine",
    },
    {
      id: 2,
      src: "/images/gallery-2.jpg",
      alt: "Oiseaux colorés en art recyclé",
      title: "Oiseaux Tropicaux",
      category: "Art Aviaire",
    },
    {
      id: 3,
      src: "/images/gallery-3.jpg",
      alt: "Sculptures colorées recyclées",
      title: "Créations Colorées",
      category: "Art Abstrait",
    },
    {
      id: 4,
      src: "/images/hero-art-recycling.jpg",
      alt: "Installation artistique recyclée",
      title: "Installation Éco",
      category: "Art Urbain",
    },
    {
      id: 5,
      src: "/images/gallery-6.jpg",
      alt: "Sculptures métalliques recyclées",
      title: "Art Métallique",
      category: "Métal Recyclé",
    },
    {
      id: 6,
      src: "/images/gallery-1.jpg",
      alt: "Art mural recyclé",
      title: "Mur Artistique",
      category: "Art Mural",
    },
  ]

  /**
   * ! COMPORTEMENT (méthodes, fonctions) de l'application
   */

  /**
   * ! AFFICHAGE (render) de l'application
   */
  return (
    <section
      id="galerie"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Art avec Impact
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Découvrez nos sculptures qui transforment les déchets en messages
            d&apos;espoir
          </p>
        </div>

        {/* Grille galerie moderne */}
        <div className="relative rounded-3xl overflow-hidden bg-black p-8 shadow-2xl">
          {/* Image principale à gauche */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[600px]">
            <div className="lg:col-span-6 relative group cursor-pointer overflow-hidden rounded-2xl">
              <Image
                src="/images/gallery-1.jpg"
                alt="Poisson coloré créé à partir de matériaux recyclés"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-2">
                  Plus de 100 œuvres créées
                </h3>
                <p className="text-white/90">
                  Chaque création raconte une histoire de transformation et
                  d&apos;espoir
                </p>
              </div>
            </div>

            {/* Grille d'images à droite */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              {galleryImages.slice(1, 7).map((image, index) => (
                <div
                  key={image.id}
                  className={`relative group cursor-pointer overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 ${
                    index === 0 || index === 3 ? "row-span-2" : ""
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-medium">{image.title}</p>
                    <p className="text-xs text-white/80">{image.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bouton d'action */}
        {/* <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full"
          >
            Voir toute la galerie
            <Eye className="ml-2 h-5 w-5" />
          </Button>
        </div> */}
      </div>
    </section>
  )
}
