"use client"

import { X } from "lucide-react"
import Link from "next/link"

interface CategoryPopupProps {
  category: {
    name: string
    description: string
  }
  isOpen: boolean
  onClose: () => void
}

export default function CategoryPopup({ category, isOpen, onClose }: CategoryPopupProps) {
  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />

      {/* Popup */}
      <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-white rounded-xl shadow-lg w-full max-w-md">
        <div className="p-6">
          {/* Close button */}
          <div className="flex justify-end mb-4">
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-[#1E293B] hover:bg-[#1E293B] hover:text-primary transition-colors duration-300"
              aria-label="Close popup"
            >
              <X size={18} />
            </button>
          </div>

          {/* Content */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#1E293B] mb-3">{category.name}</h3>
            <p className="text-sm text-[#1E293B]">{category.description}</p>
          </div>

          {/* Button */}
          <div className="flex justify-start">
            <Link
              href={`/daftar/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="inline-block py-2 px-6 rounded-full font-medium bg-primary text-[#1E293B] hover:bg-[#1E293B] hover:text-primary transition-colors duration-300"
            >
              Daftar Menjadi Anggota
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
