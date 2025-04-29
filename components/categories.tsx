"use client"

import { useState } from "react"
import Image from "next/image"
import CategoryPopup from "./category-popup"

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null)

  const categories = [
    {
      icon: "/Kategori/hotel.png",
      name: "Hotel",
      description:
        "Badan usaha jasa akomodasi/perhotelan mencakup hotel bintang dan non-bintang, dapat berupa hotel, vila, pondok wisata, bumi perkemahan, persinggahan karavan dan akomodasi lainnya yang digunakan untuk tujuan pariwisata yang terdaftar.",
    },
    {
      icon: "/Kategori/restaurant.png",
      name: "Restoran",
      description:
        "Usaha penyediaan makanan dan minuman yang dilengkapi dengan peralatan dan perlengkapan untuk proses pembuatan, penyimpanan, dan penyajian di dalam satu tempat tetap yang tidak berpindah-pindah.",
    },
    {
      icon: "/Kategori/education.png",
      name: "Lembaga Pendidikan",
      description:
        "Institusi pendidikan yang fokus pada pengembangan sumber daya manusia di bidang pariwisata, perhotelan, dan hospitality untuk memenuhi kebutuhan industri pariwisata Indonesia.",
    },
    {
      icon: "/Kategori/people.png",
      name: "Afilasi Serikat",
      description:
        "Organisasi yang mewadahi kepentingan pekerja di sektor pariwisata dan memberikan perlindungan serta advokasi untuk hak-hak pekerja di industri pariwisata Indonesia.",
    },
    {
      icon: "/Kategori/teamwork.png",
      name: "Afilasi Gabungan",
      description:
        "Kerjasama antar asosiasi dan organisasi di bidang pariwisata untuk memperkuat ekosistem pariwisata Indonesia dan meningkatkan daya saing di tingkat nasional dan internasional.",
    },
  ]

  const handleCategoryClick = (index: number) => {
    setActiveCategory(index)
  }

  const closePopup = () => {
    setActiveCategory(null)
  }

  return (
    <section className="py-[90px] px-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          {categories.map((category, index) => (
            <button
              key={category.name}
              className="flex flex-col items-center group border-none bg-transparent cursor-pointer"
              onClick={() => handleCategoryClick(index)}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#E15726] flex items-center justify-center transition-transform group-hover:scale-110">
                <Image
                  src={category.icon || "/placeholder.svg"}
                  alt={category.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 md:w-12 md:h-12"
                />
              </div>
              <span className="mt-2 text-xs md:text-sm text-center text-[#1E293B]">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Category Popup */}
      {activeCategory !== null && (
        <CategoryPopup category={categories[activeCategory]} isOpen={activeCategory !== null} onClose={closePopup} />
      )}
    </section>
  )
}
