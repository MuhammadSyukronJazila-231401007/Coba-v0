import Link from "next/link"

interface HeroProps {
  title: string
  image: string
}

export default function PageHero({ title, image }: HeroProps) {
  return (
    <div className="relative w-full h-[250px] bg-gray-800 overflow-hidden mt-16">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${image}')`,
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-end">
        <div className="text-right mr-4 md:mr-12">
          <div className="flex items-center text-sm mb-2 justify-end">
            <Link href="/" className="hover:underline text-white">
              BERANDA
            </Link>
            <span className="mx-2 text-white">/</span>
            <span className="text-white">{title.toUpperCase()}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">{title.toUpperCase()}</h1>
        </div>
      </div>
    </div>
  )
}
