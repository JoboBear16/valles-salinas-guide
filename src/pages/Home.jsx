export default function Home() {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/home-alava.jpg')",
          filter: "brightness(0.6)", // darkens the image slightly
        }}
      ></div>

      {/* Overlay Text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-6xl sm:text-7xl font-bold text-white mb-4 drop-shadow-lg">
          Bienvenidos
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 drop-shadow-md">
          Esta es la guía turística de Valles Salinas.
        </p>
      </div>
    </div>
  );
}
