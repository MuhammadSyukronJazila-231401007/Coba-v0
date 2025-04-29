"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import NewsCard from "./news-card"
import Pagination from "./pagination"

// Mock news data
const allNews = [
  {
    id: 1,
    title: "Momen Libur Paskah, Penumpang KA Jarak Jauh di DIY dan sekitarnya Meningkat",
    date: "19-April-2023 09:21",
    image: "/Berita/berita1.jpg",
    slug: "momen-libur-paskah",
  },
  {
    id: 2,
    title: "Pengusaha Hotel Menjerit Dampak Efisiensi Anggaran, PHRI Kabupaten Bogor Minta Kebijakan Dievaluasi",
    date: "20-Apr-2023 09:11",
    image: "/Berita/berita1.jpg",
    slug: "pengusaha-hotel-menjerit",
  },
  {
    id: 3,
    title: "Pelaku Wisata DIY Sebut Lonjakan Wisatawan Saat Long Weekend Tak Signifikan",
    date: "19-Apr-2023 12:37",
    image: "/Berita/berita1.jpg",
    slug: "pelaku-wisata-diy",
  },
  {
    id: 4,
    title: "Dampak Serius Efisiensi Anggaran, Bisnis Perhotelan di Kota Blitar Mengalami Penurunan Okupansi",
    date: "19-April-2023 09:21",
    image: "/Berita/berita1.jpg",
    slug: "dampak-serius-efisiensi",
  },
  {
    id: 5,
    title: "Pemkot Tasikmalaya Dukung Penuh UTHM 2023, Targetkan Perputaran Uang Rp11 Miliar",
    date: "19-April-2023 09:21",
    image: "/Berita/berita1.jpg",
    slug: "pemkot-tasikmalaya",
  },
  {
    id: 6,
    title: "Efisiensi Anggaran, Gelombang PHK Bayangi Industri Perhotelan Cirebon",
    date: "19-April-2023 09:21",
    image: "/Berita/berita1.jpg",
    slug: "efisiensi-anggaran",
  },
  {
    id: 7,
    title: "Pelaku Wisata DIY Sebut Lonjakan Wisatawan Saat Long Weekend Tak Signifikan",
    date: "19-Apr-2023 12:37",
    image: "/Berita/berita1.jpg",
    slug: "pelaku-wisata-diy-2",
  },
  {
    id: 8,
    title: "Dampak Serius Efisiensi Anggaran, Bisnis Perhotelan di Kota Blitar Mengalami Penurunan Okupansi",
    date: "19-April-2023 09:21",
    image: "/Berita/berita1.jpg",
    slug: "dampak-serius-efisiensi-2",
  },
  // Tambahkan lebih banyak berita untuk pagination
  {
    id: 9,
    title: "PHRI Jawa Barat Gelar Pelatihan Manajemen Hotel untuk Tingkatkan Kualitas Layanan",
    date: "18-April-2023 14:30",
    image: "/Berita/berita1.jpg",
    slug: "phri-jawa-barat",
  },
  {
    id: 10,
    title: "Kemenparekraf Luncurkan Program Sertifikasi Baru untuk Pelaku Wisata",
    date: "18-April-2023 10:15",
    image: "/Berita/berita1.jpg",
    slug: "kemenparekraf-luncurkan",
  },
  {
    id: 11,
    title: "Bali Catat Kenaikan Wisatawan Mancanegara Sebesar 25% pada Kuartal Pertama 2023",
    date: "17-April-2023 16:45",
    image: "/Berita/berita1.jpg",
    slug: "bali-catat-kenaikan",
  },
  {
    id: 12,
    title: "Industri MICE Mulai Pulih, Jakarta Convention Center Fully Booked Hingga Akhir Tahun",
    date: "17-April-2023 13:20",
    image: "/Berita/berita1.jpg",
    slug: "industri-mice-pulih",
  },
  {
    id: 13,
    title: "Kota Yogyakarta Kembangkan Wisata Kuliner Malam untuk Tingkatkan Ekonomi Lokal",
    date: "16-April-2023 11:05",
    image: "/Berita/berita1.jpg",
    slug: "yogyakarta-wisata-kuliner",
  },
  {
    id: 14,
    title: "Bandara Internasional Yogyakarta Buka Rute Penerbangan Baru ke Singapura",
    date: "16-April-2023 08:30",
    image: "/Berita/berita1.jpg",
    slug: "bandara-yogyakarta",
  },
  {
    id: 15,
    title: "GIPI Dorong Pemerintah Tingkatkan Promosi Pariwisata Indonesia di Pasar Asia Tenggara",
    date: "15-April-2023 15:40",
    image: "/Berita/berita1.jpg",
    slug: "gipi-dorong-pemerintah",
  },
  {
    id: 16,
    title: "Menparekraf: Wisata Halal Indonesia Berpotensi Jadi yang Terbaik di Dunia",
    date: "15-April-2023 09:50",
    image: "/Berita/berita1.jpg",
    slug: "menparekraf-wisata-halal",
  },
  {
    id: 17,
    title: "Pelaku Usaha Perhotelan di Lombok Keluhkan Kenaikan Tarif Listrik",
    date: "14-April-2023 14:15",
    image: "/Berita/berita1.jpg",
    slug: "pelaku-usaha-lombok",
  },
  {
    id: 18,
    title: "Wonderful Indonesia Raih Penghargaan di International Tourism Expo 2023",
    date: "14-April-2023 11:25",
    image: "/Berita/berita1.jpg",
    slug: "wonderful-indonesia-penghargaan",
  },
]

// Simulasi API call dengan delay
const fetchNews = async (page: number, searchQuery = "") => {
  // Simulasi network delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  const itemsPerPage = 6
  const filteredNews = searchQuery
    ? allNews.filter((news) => news.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : allNews

  const totalItems = filteredNews.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedNews = filteredNews.slice(startIndex, endIndex)

  return {
    data: paginatedNews,
    pagination: {
      currentPage: page,
      totalPages,
      totalItems,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1,
    },
  }
}

export default function NewsSection() {
  const [news, setNews] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("")
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    hasNextPage: false,
    hasPrevPage: false,
  })

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery)
      setCurrentPage(1) // Reset to first page on new search
    }, 500)

    return () => clearTimeout(timer)
  }, [searchQuery])

  // Fetch news when page or search query changes
  useEffect(() => {
    const getNews = async () => {
      setLoading(true)
      try {
        const result = await fetchNews(currentPage, debouncedSearchQuery)
        setNews(result.data)
        setPagination(result.pagination)
      } catch (error) {
        console.error("Error fetching news:", error)
      } finally {
        setLoading(false)
      }
    }

    getNews()
  }, [currentPage, debouncedSearchQuery])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll to top of news section
    window.scrollTo({ top: 400, behavior: "smooth" })
  }

  return (
    <section className="py-12 px-8 md:mx-32">
      <div className="container mx-auto max-w-6xl">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Cari Berita"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 pl-12 bg-gray-100 rounded-full border border-gray-300 text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <Search className="text-gray-400" size={20} />
            </div>
          </div>
        </div>

        {/* News Grid - 2 columns on tablet and desktop, 1 column on mobile  */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : news.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-600">Tidak ada berita yang ditemukan</h3>
            <p className="mt-2 text-gray-500">Coba gunakan kata kunci pencarian yang berbeda</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {news.map((item) => (
              <NewsCard key={item.id} news={item} />
            ))}
          </div>
        )}

        {/* Pagination */}
        {!loading && news.length > 0 && (
          <div className="mt-12 flex justify-center">
            <Pagination
              currentPage={pagination.currentPage}
              totalPages={pagination.totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </section>
  )
}
