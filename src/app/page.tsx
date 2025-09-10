import { AboutSection } from "@/components/layouts/AboutSection"
import { GallerySection } from "@/components/layouts/GallerySection"
import { HeroSection } from "@/components/layouts/HeroSection"
import { LogoSection } from "@/components/layouts/LogoSection"
import { NameSection } from "@/components/layouts/NameSection"
import { StructureSection } from "@/components/layouts/StructureSection"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <LogoSection />
      <NameSection />
      <GallerySection />
      <StructureSection />
    </main>
  )
}
