"use client"

import { X } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

interface SideMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function SideMenu({ isOpen, onClose }: SideMenuProps) {
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const menuItems = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/about" },
    { name: "Direktori", href: "/direktori" },
    { name: "Media", href: "/media" },
    { name: "Berita", href: "/news" },
    { name: "Galeri", href: "/gallery" },
    { name: "Kontak", href: "/contact" },
  ]

  return (
    <div
      className={`fixed top-0 right-0 w-[300px] h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-6 h-full flex flex-col">
        {/* Close button */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-[#1E293B] hover:bg-[#1E293B] hover:text-primary transition-colors duration-300"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Menu items */}
        <nav className="mt-8 flex-1">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.name} className="flex justify-end">
                <Link
                  href={item.href}
                  className="py-1 px-3 my-1 text-[#1E293B] font-medium rounded-full transition-all duration-300 hover:text-primary hover:bg-[#1E293B] inline-block"
                  onClick={onClose}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Login button for mobile */}
        <div className="mt-auto pt-4 border-t border-gray-200 md:hidden">
          <Link
            href="/login"
            className="flex items-center justify-center w-full py-3 px-4 bg-primary text-white font-medium rounded-full hover:bg-[#1E293B] transition-colors duration-300"
            onClick={onClose}
          >
            LOGIN
          </Link>
        </div>
      </div>
    </div>
  )
}
