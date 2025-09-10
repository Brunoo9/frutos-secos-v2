import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import ProductList from "./components/Products/ProductList";
import SectionUS from "./components/layout/SectionUS";
import SectionAbout from "./components/layout/SectionAbout";
import { Toaster } from "sonner";
import FloatingCartButton from "./components/Cart/FloatingCartButton";

function App() {
  return (
    <>
      <Header />

      <SectionAbout />
      <SectionUS />

      <section
        id="nuestros-productos"
        className="bg-white py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 md:mb-10 lg:mb-12 gap-6 lg:gap-0">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 lg:gap-20 w-full lg:w-auto">
              <h4 className="text-xl md:text-2xl lg:text-[32px] font-semibold text-black mb-2 lg:mb-3">
                Todos nuestros{" "}
                <span className="relative">
                  productos
                  <div className="absolute bottom-0 right-2 sm:right-4 lg:right-10 w-12 sm:w-16 lg:w-20 h-1 bg-orange-400 rounded-full"></div>
                </span>
              </h4>

              {/* Input de búsqueda responsive */}
              <div className="relative w-full sm:w-auto">
                <div className="relative">
                  <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                  <input
                    type="search"
                    placeholder="Busca por mix o individual"
                    className="pl-10 pr-4 py-2 sm:py-3 w-full sm:w-64 md:w-72 lg:w-80 border border-gray-300 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                  />
                </div>
              </div>
            </div>
          </div>

          <ProductList />
        </div>
      </section>

      <Footer />

      <FloatingCartButton />
      <Toaster
        expand={true}
        richColors
        position="top-right"
        closeButton
        visibleToasts={3}
      />
    </>
  );
}

export default App;
