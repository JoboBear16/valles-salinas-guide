import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker icons in React Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function Destinos() {
const places = [
    {
        name: "Valles de Álava",
        description: "Rutas de senderismo, paisajes verdes y pueblos históricos.",
        position: [42.8371, -2.6720], // latitude, longitude
        image: "/images/alava-2.jpg",
    },
    {
        name: "Salinas de Añana",
        description: "Antiguas salinas con historia y paisajes únicos.",
        position: [42.9420, -2.8685],
        image: "/images/salinas.jpg",
    },
    {
        name: "Iglesia de nuestra senora de la asunción",
        description: "Antiguas salinas con historia, paseos culturales y paisajes únicos.",
        position: [42.80149, -2.98642],
        image: "/images/iglesia-nuestra-senora.jpeg",
    },
    {
        name: "Núcleo Zoológicos",
        description: "Espacio natural con fauna local y actividades educativas.",
        position: [42.85644, -3.10813],
        image: "/images/nucleo-zoologico.jpg",
    },
    {
        name: "Globos estratos",
        description: "Vuelos en globo para disfrutar los paisajes de Álava desde el aire.",
        position: [42.8497, -2.7395],
        image: "/images/globos-estratos.jpg",
    },
    {
        name: "Ekoetxea",
        description: "Centro de educación ambiental y conservación en Valderejo.",
        position: [42.90894, -3.10652],
        image: "/images/ekoetxea2.jpg",
    }
];

return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Destinos</h1>

      {/* GRID OF CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {places.map((place, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
          >
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{place.name}</h2>
              <p className="text-gray-600 mb-4">{place.description}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
                Más info
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MAP */}
      <h2 className="text-3xl font-bold mt-16 mb-6 text-center">Mapa Interactivo</h2>
      <MapContainer
        center={[42.9, -2.75]}
        zoom={10}
        style={{ height: "500px", width: "100%" }}
        className="rounded-2xl shadow-lg"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {places.map((place, idx) => (
          <Marker key={idx} position={place.position}>
            <Popup>
              <strong>{place.name}</strong>
              <br />
              {place.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

