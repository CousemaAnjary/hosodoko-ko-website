import {
  ArrowRight,
  GraduationCap,
  Leaf,
  Recycle,
  Search,
  Shield,
  Sparkles,
  TreePine,
  Users,
  Wrench,
} from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

export default function ActivitiesSection() {
  /**
   * ! STATE (état, données) de l'application
   */
  const activities = [
    {
      icon: Recycle,
      title: "Valorisation des déchets",
      description:
        "Transformation créative des déchets en œuvres d&apos;art originales et inspirantes",
      features: ["Sculpture", "Installation", "Art décoratif"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: GraduationCap,
      title: "Éducation environnementale",
      description:
        "Programmes éducatifs pour sensibiliser aux enjeux environnementaux",
      features: ["Ateliers", "Formations", "Conférences"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: Shield,
      title: "Sensibilisation",
      description:
        "Campagnes de sensibilisation à la protection de l&apos;environnement",
      features: ["Événements", "Expositions", "Médias"],
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: Users,
      title: "Renforcement des capacités",
      description: "Accompagnement des communautés dans la gestion des déchets",
      features: ["Formation", "Coaching", "Suivi"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      icon: TreePine,
      title: "Reboisement communautaire",
      description:
        "Initiatives de plantation d&apos;arbres avec la participation locale",
      features: ["Plantation", "Entretien", "Suivi"],
      color: "from-green-600 to-lime-500",
      bgColor: "bg-lime-50",
      iconColor: "text-lime-600",
    },
    {
      icon: Wrench,
      title: "Restauration écologique",
      description: "Projets de restauration participative des écosystèmes",
      features: ["Diagnostic", "Restauration", "Monitoring"],
      color: "from-teal-500 to-cyan-600",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
    },
    {
      icon: Search,
      title: "Inventaire écologique",
      description: "Études et suivis de la biodiversité locale",
      features: ["Inventaire", "Monitoring", "Analyse"],
      color: "from-indigo-500 to-blue-600",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
    {
      icon: Leaf,
      title: "Valorisation des ressources",
      description:
        "Optimisation de l&apos;utilisation des ressources naturelles",
      features: ["Évaluation", "Optimisation", "Innovation"],
      color: "from-emerald-500 to-green-600",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
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
      id="activites"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-blue-100 text-blue-600 text-sm font-medium px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Nos Initiatives
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Nos Activités
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Découvrez l&apos;ensemble de nos initiatives pour un monde plus
            durable
          </p>
        </div>

        {/* Grille d'activités */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden hover:-translate-y-2"
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-14 h-14 ${activity.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <activity.icon className={`w-7 h-7 ${activity.iconColor}`} />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  {activity.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {activity.description}
                </p>
                <div className="space-y-2">
                  {activity.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-xs text-gray-500"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
