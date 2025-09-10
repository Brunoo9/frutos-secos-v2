import { useState } from "react";
import CartModal from "../Cart/CartModal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <nav className="flex  justify-between md:justify-center items-center px-4 py-4 mb-8 md:gap-16 relative">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img src={"../logo.png"} alt="logo" className="h-14  lg:h-16 w-auto" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6 lg:space-x-12">
        <a
          href="#"
          className="text-orange-500 font-medium hover:text-orange-600 transition-colors text-sm lg:text-base"
        >
          Sobre Nosotros
        </a>
        <a
          href="#"
          className="text-gray-700 font-medium hover:text-gray-800 transition-colors text-sm lg:text-base"
        >
          Nuestros productos
        </a>
      </div>

      {/* Cart Icon */}
      <div className="flex items-center space-x-4">
        <img
          src={"../icons_cart.png"}
          alt="carrito"
          className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={toggleCart}
        />

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-opacity-20 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 md:hidden transition-all duration-300 z-50 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={(e) => {
          // Cerrar el menú si se hace clic en el fondo del menú
          if (e.target === e.currentTarget) {
            setIsMenuOpen(false);
          }
        }}
      >
        <div className="px-4 py-4 space-y-4">
          <a
            href="#"
            className="block text-orange-500 font-medium hover:text-orange-600 transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Sobre Nosotros
          </a>
          <a
            href="#"
            className="block text-gray-700 font-medium hover:text-gray-800 transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Nuestros productos
          </a>
        </div>
      </div>

      {/* Cart Modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </nav>
  );
};

export default Navbar;
