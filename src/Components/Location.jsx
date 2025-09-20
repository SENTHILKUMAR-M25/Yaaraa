import React from "react";
import { MapPin, Navigation } from "lucide-react"; // icons (lucide-react)

export default function MaduraiNewPinnedMap() {
  // Destination (Yaaraa Technology: DMS → decimal)
  const yaaraa = "9.958306,78.155278";

  // Map iframe
  const mapSrc = `https://www.google.com/maps?q=${yaaraa}&z=17&output=embed`;

  // Route sources
  const routes = [
    {
      name: "Periyar Bus Stand → Yaaraa Technology",
      from: "9.9152,78.1116",
    },
    {
      name: "Mattuthavani Bus Stand → Yaaraa Technology",
      from: "9.9446,78.1556",
    },
    {
      name: "Arapalayam Bus Stand → Yaaraa Technology",
      from: "9.9351,78.1037",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <MapPin className="w-6 h-6 text-indigo-600" />
        Yaaraa Technology Location & Navigation
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Map Section */}
        <div className="w-full h-[70vh] rounded-xl overflow-hidden shadow-md">
          <iframe
            title="Yaaraa Technology Location"
            src={mapSrc}
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* Navigation Links Section */}
        <div className="flex flex-col justify-center bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            Navigation Links
          </h3>
          <ul className="space-y-3">
            {routes.map((route, idx) => {
              const link = `https://www.google.com/maps/dir/${route.from}/${yaaraa}`;
              return (
                <li key={idx}>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                  >
                    <Navigation className="w-4 h-4" />
                    {route.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}