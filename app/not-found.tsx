import Link from 'next/link';

export default function Custom404() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center text-gray-800">
      <div className="max-w">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4">🚧 Website Sedang Dibangun</h1>
        <p className="text-md md:text-lg mb-6">
          Maaf, halaman yang kamu cari belum tersedia atau sedang dalam proses pengembangan.
        </p>
        <Link
          href="/"
          className="inline-block rounded-lg bg-primary text-white px-6 py-3 shadow hover:bg-blue-700 transition"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}
