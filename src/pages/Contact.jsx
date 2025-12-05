import { Mail} from "lucide-react";

export default function Contacto() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-center">Contacto</h1>

      <p className="text-gray-700 max-w-xl text-center mb-10">
        Si tienes preguntas, sugerencias o necesitas ayuda, puedes ponerte en
        contacto con nosotros mediante los siguientes enlaces:
      </p>

      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-xl space-y-6">

        {/* Email */}
        <div className="flex items-center space-x-4">
          <Mail className="w-6 h-6 text-blue-600" />
          <a
            href="mailto:joliemakena.robison@opendeusto.es"
            className="text-lg text-blue-600 hover:underline"
          >
            joliemakena.robison@opendeusto.es
          </a>
        </div>

        {/* Another email */}
        <div className="flex items-center space-x-4">
          <Mail className="w-6 h-6 text-blue-600" />
          <a
            href="mailto:berta.mullner@opendeusto.es"
            className="text-lg text-blue-600 hover:underline"
          >
            berta.mullner@opendeusto.es
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <Mail className="w-6 h-6 text-blue-600" />
          <a
            href="mailto:lia.merlin@opendeusto.es"
            className="text-lg text-blue-600 hover:underline"
          >
            lia.merlin@opendeusto.es
          </a>
        </div>

      </div>
    </div>
  );
}
