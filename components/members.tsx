"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Members() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [showControls, setShowControls] = useState(false)

  const members = [
    { name: "PATA", logo: "/Anggota/anggota1.png" },
    { name: "ASEANTA", logo: "/Anggota/anggota2.png" },
    { name: "AHRA", logo: "/Anggota/anggota3.png" },
    { name: "PHRI", logo: "/Anggota/anggota4.png" },
    // { name: "Member 5", logo: "/members/member5.png" },
    // { name: "Member 6", logo: "/members/member6.png" },
  ]

  useEffect(() => {
    const checkSize = () => {
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
    const scrollAmount = container.clientWidth / 2

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
    <section className="py-[45px] px-4 md:mx-32">
      <div className="container mx-auto">
        <div className="flex items-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#1E293B] uppercase">Anggota Dari</h2>
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
            {members.map((member, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center h-16 md:h-20">
                <Image
                  src={member.logo || "/placeholder.svg"}
                  alt={member.name}
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
