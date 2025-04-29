import PageHero from "@/components/page-hero"
import AccordionProvince from "@/components/accordion-province"

export default function DirectoryPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHero title="Direktori" image="Hero/direktori.png"/>

      {/* Directory Content */}
      <AccordionProvince />
    </main>
  )
}
