import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">Guía Turística</h1>
      <ul className="flex gap-4 text-gray-700">
        <li><Link to="/" className="hover:text-blue-600">Inicio</Link></li>
        <li><Link to="/destinos" className="hover:text-blue-600">Destinos</Link></li>
        <li><Link to="/consejos" className="hover:text-blue-600">Consejos</Link></li>
        <li><Link to="/contacto" className="hover:text-blue-600">Contacto</Link></li>
      </ul>
    </nav>
  );
}