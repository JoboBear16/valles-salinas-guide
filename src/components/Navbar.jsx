import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 flex flex-col md:flex-row md:justify-between md:items-center">
      {/* Logo / Title */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Guía Turística</h1>

        {/* Hamburger button for mobile */}
        <button
          className="md:hidden flex flex-col ml-2"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-0.5 bg-gray-700 mb-1"></span>
          <span className="w-6 h-0.5 bg-gray-700 mb-1"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
        </button>
      </div>

      {/* Links */}
      <ul
        className={`flex flex-col md:flex-row md:gap-4 mt-2 md:mt-0 ${
          open ? "flex" : "hidden"
        }`}
      >
        <li>
          <Link
            to="/"
            className="hover:text-blue-600 block py-2 px-3"
            onClick={() => setOpen(false)}
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="/destinos"
            className="hover:text-blue-600 block py-2 px-3"
            onClick={() => setOpen(false)}
          >
            Destinos
          </Link>
        </li>
        <li>
          <Link
            to="/consejos"
            className="hover:text-blue-600 block py-2 px-3"
            onClick={() => setOpen(false)}
          >
            Consejos
          </Link>
        </li>
        <li>
          <Link
            to="/contacto"
            className="hover:text-blue-600 block py-2 px-3"
            onClick={() => setOpen(false)}
          >
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}