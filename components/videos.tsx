"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

export default function Videos() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  const videos = [
    {
      id: "video1",
      thumbnail: "/ThumbnailVideo/thumbnail1.jpg",
      title: "Wisata Bahari Indonesia",
      url: "https://www.youtube.com/embed/VIDEO_ID_1",
    },
    {
      id: "video2",
      thumbnail: "/ThumbnailVideo/thumbnail2.jpg",
      title: "Wawancara Ketua GIPI",
      url: "https://www.youtube.com/embed/VIDEO_ID_2",
    },
    {
      id: "video3",
      thumbnail: "/ThumbnailVideo/thumbnail3.jpg",
      title: "Pelantikan Pengurus GIPI",
      url: "https://www.youtube.com/embed/VIDEO_ID_3",
    },
    {
      id: "video4",
      thumbnail: "/ThumbnailVideo/thumbnail4.jpg",
      title: "Konferensi Pariwisata 2023",
      url: "https://www.youtube.com/embed/VIDEO_ID_4",
    },
  ]

  const closeVideo = () => {
    setActiveVideo(null)
  }

  return (
    <section className="py-[45px] px-8 md:mx-32">
      <div className="container mx-auto">
        <div className="flex items-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#1E293B] uppercase">Video</h2>
          <div className="h-[3px] bg-primary flex-grow ml-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative overflow-hidden rounded-xl group cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => setActiveVideo(video.url)}
            >
              <div className="aspect-video relative">
                <Image src={video.thumbnail || "/placeholder.svg"} alt={video.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#E15726] flex items-center justify-center">
                    <Play size={24} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={closeVideo}>
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeVideo} className="absolute -top-10 right-0 text-white" aria-label="Close video">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="aspect-video w-full">
              <iframe src={activeVideo} className="w-full h-full" allowFullScreen title="Video"></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
