import { useState } from "react";

export default function Consejos() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const tips = [
    {image: "/images/dia-one.jpg" },
    {image: "/images/dia-two.jpg" },
    {image: "/images/oferta.jpg" }
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Consejos para tu Visita
      </h1>

      <p className="text-gray-700 text-center mb-8">
        Aquí encontrarás información visual y útil para planificar tu recorrido.
      </p>

      {/* Grid of cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition cursor-pointer"
            onClick={() => setLightboxImage(tip.image)}
          >
            <img
              src={tip.image}
              alt={tip.title}
              className="w-full h-100 object-cover"   // <-- taller card
            />
            <p className="p-4 font-semibold text-center">{tip.title}</p>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={() => setLightboxImage(null)}
        >
          <img
            src={lightboxImage}
            alt="Preview"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
}