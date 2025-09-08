import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Fondo con imagen y overlay */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-16 px-8"
        style={{ backgroundImage: "url(/footer-fondo.jpg)" }}
      >
        {/* Overlay para mejorar la legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-200/80 to-brown-custom/80"></div>

        {/* Contenido del footer */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          <img
            src="/logo-footer.png"
            alt="Frutos Alvear Logo"
            className="w-[100px] h-[100px] object-contain"
          />

          {/* Sección central - Slogan */}
          <div className="text-center mb-8 lg:mb-0">
            <h2 className="text-white text-2xl lg:text-3xl font-semibold mb-2">
              Llenando tu vida
            </h2>
            <h3 className="relative text-white text-2xl lg:text-3xl font-semibold mb-3">
              de salud y sabor
              <div className="absolute -bottom-1 right-5 w-40 h-1 bg-orange-custom  rounded-full"></div>
            </h3>
            {/* Línea decorativa naranja */}
          </div>

          {/* Sección derecha - Redes sociales */}
          <div className="text-center lg:text-right">
            <p className="text-white text-lg font-medium mb-4">
              Seguinos en nuestras redes
            </p>

            {/* TODO: COMPONETIZAR LOS "a" Y HACERLOS REUTILIZABLES*/}
            {/* Iconos de redes sociales */}
            <div className="flex justify-center  space-x-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/frutos.alvear/"
                target="_blank"
                className="w-12 h-12 rounded-full bg-brown-custom flex items-center justify-center hover:bg-orange-custom transition-colors duration-300"
                aria-label="Seguir en Instagram"
              >
                <FaInstagram className="w-6 h-6 text-white" />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/frutos.alvear/"
                className="w-12 h-12 rounded-full bg-brown-custom flex items-center justify-center hover:bg-orange-custom transition-colors duration-300"
                aria-label="Seguir en Facebook"
              >
                <FaFacebook className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
