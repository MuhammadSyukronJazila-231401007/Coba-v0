"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, MapPin, Mail, Phone, Globe } from "lucide-react";
import Image from "next/image";

// Data provinsi Indonesia
const provinces = [
  {
    id: 1,
    name: "Bali",
    fullName: "BPD Provinsi Bali",
    officials: [
      {
        name: "I Ketut Ardana",
        position: "KETUA",
        image: "placeholder.png",
      },
      {
        name: "Ni Made Ayu",
        position: "SEKRETARIS",
        image: "placeholder.png",
      },
    ],
    address: "Jl. Raya Kuta No. 88, Kuta, Badung, Bali",
    email: "bpdbali@gipi.or.id",
    phone: "+62361123456",
    website: "bali.gipi.or.id",
  },
  {
    id: 2,
    name: "Bangka Belitung",
    fullName: "BPD Provinsi Bangka Belitung",
    officials: [
      {
        name: "Ahmad Rizki",
        position: "KETUA",
        image: "placeholder.png",
      },
      {
        name: "Siti Nurhaliza",
        position: "SEKRETARIS",
        image: "placeholder.png",
      },
    ],
    address: "Jl. Sudirman No. 45, Pangkal Pinang, Bangka Belitung",
    email: "bpdbabel@gipi.or.id",
    phone: "+62717123456",
    website: "",
  },
  {
    id: 3,
    name: "Banten",
    fullName: "BPD Provinsi Banten",
    officials: [
      {
        name: "Hendra Wijaya",
        position: "KETUA",
        image: "placeholder.png",
      },
      {
        name: "Dewi Kartika",
        position: "SEKRETARIS",
        image: "placeholder.png",
      },
    ],
    address: "Jl. Raya Serang No. 123, Serang, Banten",
    email: "bpdbanten@gipi.or.id",
    phone: "+62254123456",
    website: "",
  },
  {
    id: 4,
    name: "Jakarta",
    fullName: "BPD Provinsi Jakarta",
    officials: [
      {
        name: "Budi Santoso",
        position: "KETUA",
        image: "placeholder.png",
      },
      {
        name: "Lina Wijaya",
        position: "SEKRETARIS",
        image: "placeholder.png",
      },
    ],
    address: "Jl. Sudirman Kav. 45, Jakarta Pusat, DKI Jakarta",
    email: "bpdjakarta@gipi.or.id",
    phone: "+62213456789",
    website: "jakarta.gipi.or.id",
  },
  {
    id: 5,
    name: "Jawa Barat",
    fullName: "BPD Provinsi Jawa Barat",
    officials: [
      {
        name: "Asep Sunandar",
        position: "KETUA",
        image: "placeholder.png",
      },
      {
        name: "Tia Maulida",
        position: "SEKRETARIS",
        image: "placeholder.png",
      },
    ],
    address: "Jl. Asia Afrika No. 56, Bandung, Jawa Barat",
    email: "bpdjabar@gipi.or.id",
    phone: "+62227654321",
    website: "",
  },
  {
    id: 6,
    name: "Jawa Tengah",
    fullName: "BPD Provinsi Jawa Tengah",
    officials: [
      {
        name: "Bambang Sutrisno",
        position: "KETUA",
        image: "placeholder.png",
      },
      {
        name: "Ratna Dewi",
        position: "SEKRETARIS",
        image: "placeholder.png",
      },
    ],
    address: "Jl. Pahlawan No. 78, Semarang, Jawa Tengah",
    email: "bpdjateng@gipi.or.id",
    phone: "+62248765432",
    website: "jateng.gipi.or.id",
  },
  {
    id: 7,
    name: "Jawa Timur",
    fullName: "BPD Provinsi Jawa Timur",
    officials: [
      {
        name: "Hadi Wijaya",
        position: "KETUA",
        image: "placeholder.png",
      },
      {
        name: "Sari Indah",
        position: "SEKRETARIS",
        image: "placeholder.png",
      },
    ],
    address: "Jl. Pemuda No. 90, Surabaya, Jawa Timur",
    email: "bpdjatim@gipi.or.id",
    phone: "+62315678901",
    website: "",
  },
  {
    id: 8,
    name: "Sulawesi Tengah",
    fullName: "BPD Sulawesi Tengah",
    officials: [
      {
        name: "Anwar Ibrahim",
        position: "KETUA",
        image: "placeholder.png",
      },
      {
        name: "Mira Susanti",
        position: "SEKRETARIS",
        image: "placeholder.png",
      },
    ],
    address: "Jl. Diponegoro No. 45, Palu, Sulawesi Tengah",
    email: "bpdsulteng@gipi.or.id",
    phone: "+62451234567",
    website: "",
  },
  {
    id: 9,
    name: "Sumatera Barat",
    fullName: "BPD Provinsi Sumatera Barat",
    officials: [
      {
        name: "AE. Rina Pangeran",
        position: "KETUA",
        image: "placeholder.png",
      },
      {
        name: "Elvis Syarif",
        position: "SEKRETARIS",
        image: "placeholder.png",
      },
    ],
    address: "Jl. Ir. H Juanda No. 79, Flamboyan Baru, Kec. Padang Barat",
    email: "bpdsumbar@gipi.or.id",
    phone: "+6275170513133",
    website: "",
  },
  {
    id: 10,
    name: "Sumatera Selatan",
    fullName: "BPD Provinsi Sumatera Selatan",
    officials: [
      {
        name: "Darmawan Putra",
        position: "KETUA",
        image: "placeholder.png",
      },
      {
        name: "Yanti Permata",
        position: "SEKRETARIS",
        image: "placeholder.png",
      },
    ],
    address: "Jl. Demang Lebar Daun No. 56, Palembang, Sumatera Selatan",
    email: "bpdsumsel@gipi.or.id",
    phone: "+62711345678",
    website: "",
  },
  {
    id: 11,
    name: "Sumatera Utara",
    fullName: "BPD Provinsi Sumatera Utara",
    officials: [
      {
        name: "Taufik Hidayat",
        position: "KETUA",
        image: "placeholder.png",
      },
      {
        name: "Rini Hasanah",
        position: "SEKRETARIS",
        image: "placeholder.png",
      },
    ],
    address: "Jl. Diponegoro No. 123, Medan, Sumatera Utara",
    email: "bpdsumut@gipi.or.id",
    phone: "+62614567890",
    website: "sumut.gipi.or.id",
  },
];

export default function AccordionProvince() {
  const [selectedProvince, setSelectedProvince] = useState<string>("all");
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const accordionRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const handleProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProvince(e.target.value);
    setOpenAccordion(null);
  };

  const toggleAccordion = (id: number) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  // Scroll to the opened accordion
  useEffect(() => {
    if (openAccordion !== null && accordionRefs.current[openAccordion]) {
      const timeout = setTimeout(() => {
        const yOffset = -100;
        const element = accordionRefs.current[openAccordion];
        const y = element
          ? element.getBoundingClientRect().top + window.pageYOffset + yOffset
          : 0;

        window.scrollTo({ top: y, behavior: "smooth" });
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [openAccordion]);

  const filteredProvinces =
    selectedProvince === "all"
      ? provinces
      : provinces.filter((province) => province.name === selectedProvince);

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Province Dropdown */}
        <div className="mb-8">
          <select
            value={selectedProvince}
            onChange={handleProvinceChange}
            className="w-full s p-3 bg-gray-100 rounded-full border border-gray-300 text-[#1E293B] text-sm focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer pl-6 pr-10 relative"
            style={{
              backgroundImage:
                'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>\')',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 10px center",
            }}
          >
            <option value="all">Pilih Provinsi</option>
            {provinces.map((province) => (
              <option key={province.id} value={province.name}>
                {province.name}
              </option>
            ))}
          </select>
        </div>

        {/* Province Accordions */}
        <div className="bg-gray-100 rounded-2xl p-6">
          {filteredProvinces.map((province) => (
            <div
              key={province.id}
              className="mb-4"
              ref={(el) => (accordionRefs.current[province.id] = el)}
            >
              {/* Accordion Header */}
              <button
                className={`w-full text-left p-4 md:p-3 rounded-2xl flex items-center justify-between text-sm relative z-20 ${
                  openAccordion === province.id
                    ? "bg-primary text-white"
                    : "bg-white text-[#1E293B]"
                } transition-all duration-300 shadow-sm hover:shadow`}
                onClick={() => toggleAccordion(province.id)}
              >
                <span className="font-medium">
                  {province.id}. {province.fullName}
                </span>
                <ChevronDown
                  className={`transition-transform duration-500 ${
                    openAccordion === province.id ? "rotate-180" : ""
                  }`}
                  size={18}
                />
              </button>

              {/* Accordion Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out -z-10 ${
                  openAccordion === province.id
                    ? "max-h-[1000px] opacity-100 -mt-5"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-white p-6 pt-8 rounded-2xl border border-t-0 border-gray-200 shadow-sm">
                  {/* Officials */}
                  <div className="flex flex-wrap gap-8 mb-6">
                    {province.officials.map((official, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full overflow-hidden mb-2">
                          <Image
                            src={
                              official.image ||
                              "/placeholder.svg?height=80&width=80"
                            }
                            alt={official.name}
                            width={80}
                            height={80}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <h3 className="font-medium text-[#1E293B]">
                          {official.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {official.position}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Contact Information */}
                  <div className="mt-4">
                    <h3 className="font-medium text-[#1E293B] mb-2">Alamat</h3>
                    <div className="space-y-3">
                      {province.address && (
                        <div className="flex items-start">
                          <MapPin
                            className="text-primary mr-2 mt-1 flex-shrink-0"
                            size={18}
                          />
                          <span className="text-sm text-[#1E293B]">
                            {province.address}
                          </span>
                        </div>
                      )}
                      {province.email && (
                        <div className="flex items-center">
                          <Mail
                            className="text-primary mr-2 flex-shrink-0"
                            size={18}
                          />
                          <a
                            href={`mailto:${province.email}`}
                            className="text-sm text-[#1E293B] hover:underline"
                          >
                            {province.email}
                          </a>
                        </div>
                      )}
                      {province.phone && (
                        <div className="flex items-center">
                          <Phone
                            className="text-primary mr-2 flex-shrink-0"
                            size={18}
                          />
                          <a
                            href={`tel:${province.phone}`}
                            className="text-sm text-[#1E293B] hover:underline"
                          >
                            {province.phone}
                          </a>
                        </div>
                      )}
                      {province.website && (
                        <div className="flex items-center">
                          <Globe
                            className="text-primary mr-2 flex-shrink-0"
                            size={18}
                          />
                          <a
                            href={`https://${province.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-[#1E293B] hover:underline"
                          >
                            {province.website}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
