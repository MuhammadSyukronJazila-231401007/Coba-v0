"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface NewsCardProps {
  news: {
    id: number
    title: string
    date: string
    image: string
    slug: string
  }
}

export default function NewsCard({ news }: NewsCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Format date: "19-April-2023 09:21" to "19-Apr-2023 09:21"
  const formatDate = (dateString: string) => {
    const parts = dateString.split(" ")
    const dateParts = parts[0].split("-")

    // Shorten month name if it's longer than 3 characters
    let month = dateParts[1]
    if (month.length > 3) {
      month = month.substring(0, 3)
    }

    return `${dateParts[0]}-${month}-${dateParts[2]} ${parts[1]}`
  }

  return (
      <div
        className="flex flex-col sm:flex-row overflow-visible rounded-xl bg-transparent my-2 md:my-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gambar */}
        <div className="relative w-full sm:w-36 h-48 sm:h-auto flex-shrink-0">
          <Image
            src={news.image || "/placeholder.svg?height=140&width=140"}
            alt={news.title}
            fill
            className={`object-cover transition-opacity duration-300 
              ${isHovered ? "opacity-80" : "opacity-100"}
              rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none sm:rounded-tl-xl`}
          />
        </div>
            
        {/* Konten */}
        <div className="relative overflow-visible flex flex-col justify-between flex-grow p-4 bg-[#F2F2F2] rounded-b-xl sm:rounded-r-xl sm:rounded-bl-none">
          <div>
            <p className="text-xs text-gray-500 mb-2">{formatDate(news.date)}</p>
            <h3 className="text-sm font-medium text-[#1E293B] line-clamp-2">{news.title}</h3>
          </div>
          <div className="flex justify-end mt-2">
            <Link
              href={`/media/${news.slug}`}
              className={`absolute right-4 -bottom-3 text-xs font-medium py-1.5 px-4 rounded-full transition-colors duration-300 
                ${isHovered ? "bg-[#2D2D2D] text-[#E65300]" : "bg-[#E65300] text-[#2D2D2D]"}`}
            >
              Selengkapnya →
            </Link>
          </div>
        </div>
      </div>
  )
}
