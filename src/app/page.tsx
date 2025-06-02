import { AboutSection } from "@/components/layouts/AboutSection"
import { HeroSection } from "@/components/layouts/HeroSection"

export default function Home() {
  return (
    <main className="space-y-20">
      <HeroSection />
      <AboutSection />
    </main>
  )
}
