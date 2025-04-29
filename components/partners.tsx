"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Partners() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [showControls, setShowControls] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const partners = [
    { name: "Coca Cola", logo: "/Mitra/mitra1.png" },
    { name: "Wonderful Indonesia", logo: "/Mitra/mitra2.png" },
    { name: "TOTO", logo: "/Mitra/mitra3.png" },
    { name: "Telindo", logo: "/Mitra/mitra4.png" },
    // { name: "Partner 5", logo: "mitra3.png" },
    // { name: "Partner 6", logo: "mitra4.png" },
  ]

  useEffect(() => {
    const checkSize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      setShowControls(
        containerRef.current ? containerRef.current.scrollWidth > containerRef.current.clientWidth : false,
      )
    }

    checkSize()
    window.addEventListener("resize", checkSize)
    return () => window.removeEventListener("resize", checkSize)
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return

    const container = containerRef.current
    const scrollAmount = isMobile ? container.clientWidth / 2 : container.clientWidth / 3

    if (direction === "left") {
      setScrollPosition(Math.max(scrollPosition - scrollAmount, 0))
    } else {
      setScrollPosition(Math.min(scrollPosition + scrollAmount, container.scrollWidth - container.clientWidth))
    }
  }

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      })
    }
  }, [scrollPosition])

  return (
    <section className="py-[45px]  px-4 md:mx-32">
      <div className="container mx-auto">
        <div className="flex items-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#1E293B] uppercase">Mitra Kerja</h2>
          <div className="h-[3px] bg-primary flex-grow ml-4 rounded-full"></div>
        </div>

        <div className="relative">
          {showControls && (
            <>
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md text-[#1E293B]"
                aria-label="Scroll left"
                disabled={scrollPosition === 0}
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md text-[#1E293B]"
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          <div
            ref={containerRef}
            className="flex overflow-x-auto scrollbar-hide gap-20 px-8 py-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {partners.map((partner, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center h-16 md:h-20">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
