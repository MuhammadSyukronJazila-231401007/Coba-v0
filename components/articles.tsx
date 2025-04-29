import Image from "next/image"
import Link from "next/link"

export default function Articles() {
  const articles = [
    {
      id: "article1",
      image: "/Artikel/artikel1.png",
      date: "20 April 2023",
      title: "Pertemuan Dinas Pariwisata dengan GIPI di Bali",
      url: "/articles/article1",
    },
    {
      id: "article2",
      image: "/Artikel/artikel2.webp",
      date: "15 April 2023",
      title: "Kerjasama Sektor Pariwisata Indonesia dengan Thailand",
      url: "/articles/article2",
    },
    {
      id: "article3",
      image: "/Artikel/artikel3.jpg",
      date: "10 April 2023",
      title: "Diskusi Peningkatan Kualitas SDM Pariwisata 2023",
      url: "/articles/article3",
    },
    {
      id: "article4",
      image: "/Artikel/artikel4.jpg",
      date: "5 April 2023",
      title: "Kunjungan Menteri Pariwisata ke Kawasan Wisata Banyuwangi",
      url: "/articles/article4",
    },
  ]

  return (
    <section className="py-[45px] px-8 md:mx-32">
      <div className="container mx-auto">
        <div className="flex items-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#1E293B] uppercase">Artikel</h2>
          <div className="h-[3px] bg-primary flex-grow ml-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-[#D9D9D9] rounded-3xl overflow-visible shadow-sm hover:shadow-md transition-all duration-300 hover:bg-[#F2F2F2] relative"
            >
              <div className="relative overflow-visible rounded-t-lg">
                <div className="aspect-video overflow-visible">
                  <div className="w-full h-full relative overflow-visible">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover  rounded-3xl transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
          
              {/* Konten Utama */}
              <div className="p-4 py-2 pb-8 relative"> {/* Tambah padding bawah */}
                <p className="text-xs text-gray-500 mb-2">{article.date}</p>
                <h3 className="text-sm font-medium text-[#1E293B] line-clamp-2 mb-6 mt-2">
                  {article.title}
                </h3>
          
                {/* Tombol absolute */}
                <Link
                  href={article.url}
                  className="absolute bottom-[-0.75rem] left-4 text-xs font-semibold italic bg-primary text-[#1E293B] py-1.5 px-4 
                  rounded-full transition-colors duration-300 hover:bg-[#1E293B] hover:text-primary"
                >
                  Selengkapnya →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
