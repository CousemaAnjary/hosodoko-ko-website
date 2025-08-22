"use client"

import Footer from "@/src/components/home/Footer"
import GallerySection from "@/src/components/home/GallerySection"
import Header from "@/src/components/home/Header"
import HeroSection from "@/src/components/home/HeroSection"
import MissionSection from "@/src/components/home/MissionSection"

export default function page() {
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
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <MissionSection />
      <GallerySection />
      <Footer />
    </div>
  )
}
