import Link from "next/link"

export default function MediaHero() {
  return (
    <div className="relative w-full h-[250px] bg-gray-800 overflow-hidden mt-16">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/media-hero.jpg')",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-end">
        <div className="text-white text-right mr-4 md:mr-12">
          <div className="flex items-center text-sm mb-2 justify-end">
            <Link href="/" className="hover:underline">
              BERANDA
            </Link>
            <span className="mx-2">/</span>
            <span>MEDIA</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">MEDIA</h1>
        </div>
      </div>
    </div>
  )
}
