import { AboutSection } from "@/components/layouts/AboutSection"
import { HeroSection } from "@/components/layouts/HeroSection"
import { LogoSection } from "@/components/layouts/LogoSection"
import { StructureSection } from "@/components/layouts/StructureSection"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <LogoSection />
      <StructureSection />
    </main>
  )
}
