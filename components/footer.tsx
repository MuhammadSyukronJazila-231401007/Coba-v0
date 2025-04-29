import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const sitemapLinks = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/about" },
    { name: "Direktori", href: "/direktori" },
    { name: "Media", href: "/media" },
    { name: "Galeri", href: "/galeri" },
    { name: "Kontak", href: "/contact" },
    { name: "Kebijakan Privasi", href: "/privacy" },
    { name: "Syarat & Ketentuan", href: "/terms" },
    { name: "GIPI Package", href: "/package" },
    { name: "Kebijakan Refund", href: "/refund" },
  ];

  const partnerLinks = [
    { name: "Wonderful Indonesia", href: "#" },
    { name: "Booking.com", href: "#" },
  ];

  return (
    <>
      <footer className="bg-[#333333] text-white pt-12 pb-6 mt-[45px]">
        <div className="container mx-auto px-10 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-white text-lg font-bold uppercase mb-2">
                Gabungan Industri Pariwisata Indonesia
              </h3>
              <p className="text-sm text-gray-300 mb-4 font-medium">
                Jalan Cempaka Putih Tengah 27, No. 16, Kecamatan Cempaka Putih,
                Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10510
              </p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  aria-label="Facebook"
                  className="p-2 bg-[#535353] rounded-full"
                >
                  <Facebook size={20} color="white" />
                </Link>
                <Link
                  href="#"
                  aria-label="Instagram"
                  className="p-2 bg-[#535353] rounded-full"
                >
                  <Instagram size={20} color="white" />
                </Link>
                <Link
                  href="#"
                  aria-label="Twitter"
                  className="p-2 bg-[#535353] rounded-full"
                >
                  <Twitter size={20} color="white" />
                </Link>
              </div>
            </div>

            {/* Partners */}
            <div className="md:px-20">
              <h3 className="text-white text-lg font-bold uppercase mb-2">
                Partner Kami
              </h3>
              <ul className="space-y-1">
                {partnerLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sitemap */}
            <div>
              <h3 className="text-white after:text-lg font-bold uppercase mb-4">
                Sitemap
              </h3>
              <ul className="grid grid-cols gap-1">
                {sitemapLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright section - outside container for full width */}
      <div className="bg-black py-2 w-full text-center">
        <p className="text-white text-sm italic">
          Copyright © 2025 by Gabungan Industri Pariwisata Indonesia
        </p>
      </div>
    </>
  );
}
