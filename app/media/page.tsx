import PageHero from "@/components/page-hero"
import NewsSection from "@/components/news-section"

export default function MediaPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <PageHero title="Media" image="Hero/media.png"/>

      {/* News Section with Search and Pagination */}
      <NewsSection />
    </main>
  )
}
