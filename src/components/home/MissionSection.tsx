import { BookOpen, Lightbulb, Network, Users } from "lucide-react"
import { Card, CardContent } from "../ui/card"

export default function MissionSection() {
  /**
   * ! STATE (état, données) de l'application
   */
  const missions = [
    {
      icon: Lightbulb,
      title: "Valoriser les déchets",
     description: "Transformer les déchets en œuvres d'arts originaux et inspirants, révélant leur potentiel esthétique et leur message environnemental.",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Users,
      title: "Promouvoir l&apos;écoresponsabilité",
      description: "Sensibiliser à travers des approches ludiques et créatives pour développer une conscience environnementale durable.",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Network,
      title: "Fédérer un réseau",
      description: "Rassembler les acteurs locaux pour co-construire et déployer des initiatives innovantes de gestion des déchets.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: BookOpen,
      title: "Diffuser les connaissances",
      description: "Partager les bonnes pratiques en matière de gestion des déchets pour promouvoir une culture de responsabilité environnementale.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
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
      id="mission"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Notre Mission
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            <span className="font-semibold text-blue-600">
              « Être une référence de la gestion des déchets{" "}
            </span>
            et dans l&apos;éducation environnementale avec une approche
            participative et inclusive »
          </p>
        </div>

        {/* Grille des missions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {missions.map((mission, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-16 h-16 ${mission.bgColor} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <mission.icon className={`w-8 h-8 ${mission.color}`} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                      {mission.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {mission.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
