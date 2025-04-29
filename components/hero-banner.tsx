export default function HeroBanner(){
    return (
        <>
            {/* Hero Banner */}
            <div className="relative h-48 md:h-64 bg-gray-800 overflow-hidden">
            <img
              src="/placeholder.svg?height=300&width=900"
              alt="Directory Banner"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <div className="text-sm mb-1">BERANDA / DIREKTORI</div>
              <h1 className="text-3xl font-bold">DIREKTORI</h1>
            </div>
            </div>
        </>
    )
}