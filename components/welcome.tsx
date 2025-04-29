"use client"

import { useState } from "react"
import Link from "next/link"

export default function Welcome() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="py-[0px] pb-[45px] px-4">
      <div className="container mx-auto">
        <div className="text-center pb-[90px]">
          <h2 className="text-2xl md:text-4xl font-semibold text-[#1E293B]">Selamat datang di</h2>
          <h3 className="text-2xl md:text-4xl font-semibold text-[#1E293B]">Gabungan Industri Pariwisata Indonesia</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* About Box */}
          <div className="rounded-[20px] bg-primary text-white p-6 md:p-8">
            <p className="text-sm md:text-base text-justify">
              GIPI merupakan industri akomodasi, diantara restoran dan kafe, transportasi, hiburan, perjalanan, dan
              lain-lain yang terlibat dalam industri pariwisata yang didirikan Perhimpunan Hotel dan Restoran Indonesia
              yang merupakan kebanggaan dari Indonesia Tourist Hotel Association (IHRA) yang didirikan pada tanggal 9
              Februari 1969.
            </p>
          </div>

          {/* Membership Box - With hover effect */}
          <div
            className={`rounded-[20px] border-2 border-primary p-6 md:p-8 flex flex-col items-center justify-center text-center transition-all duration-300 ${
              isHovered ? "bg-[#1E293B]" : "bg-white"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <h4
              className={`text-lg md:text-xl mb-2 transition-all duration-300 font-bold ${isHovered ? "text-white" : "text-[#1E293B]"}`}
            >
              Cara bergabung menjadi member aktif GIPI?
            </h4>
            <p className={`mb-4 transition-all duration-300 font-medium ${isHovered ? "text-white" : "text-[#1E293B]"}`}>
              Klik tombol dibawah
            </p>
            <Link
              href="/register"
              className={`bg-primary text-white py-2 px-6 rounded-full font-semibold transition-all duration-300 ${
                isHovered ? "hover:bg-white hover:text-primary" : "hover:bg-[#1E293B]"
              }`}
            >
              DAFTAR
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
