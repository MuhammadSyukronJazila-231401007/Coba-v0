import Hero from "@/components/hero"
import Categories from "@/components/categories"
import Welcome from "@/components/welcome"
import Partners from "@/components/partners"
import Members from "@/components/members"
import Videos from "@/components/videos"
import Articles from "@/components/articles"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <Categories />

      {/* Welcome Section */}
      <Welcome />

      {/* Partners Section */}
      <Partners />

      {/* Members Section */}
      <Members />

      {/* Videos Section */}
      <Videos />

      {/* Articles Section */}
      <Articles />
    </main>
  )
}
