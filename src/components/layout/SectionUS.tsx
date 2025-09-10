const SectionUS = () => {
  return (
    <section
      className="bg-cream py-12 md:py-16 lg:py-20 relative"
      id="sobre-nosotros"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Layout responsive: columna en móvil/tablet, fila en desktop */}
        <div className="flex flex-col lg:flex-row lg:justify-end lg:items-center gap-8 lg:gap-20">
          {/* Imagen - centrada en móvil, posicionamiento absoluto en desktop */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-1">
            <div className="relative lg:absolute lg:-top-20 lg:left-4 xl:left-12 2xl:left-65">
              <div className="rounded-2xl border-4 md:border-6 border-white shadow-lg">
                <img
                  src="../nosotros.png"
                  alt="Imágen nosotros"
                  className="w-[240px] h-[320px] sm:w-[280px] sm:h-[380px] md:w-[320px] md:h-[420px] lg:w-[360px] lg:h-[500px] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Contenido de texto - orden 2 en móvil, orden 2 en desktop */}
          <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 order-2 lg:order-2 lg:max-w-md lg:mr-8 xl:mr-20 2xl:mr-40">
            <div>
              <h4 className="text-xl md:text-2xl lg:text-[32px] font-semibold text-black mb-2 md:mb-3 text-center lg:text-left">
                Sobre{" "}
                <span className="relative">
                  nosotros
                  <div className="absolute bottom-0 left-0 w-8 md:w-9 lg:w-10 h-1 bg-orange-400 rounded-full"></div>
                </span>
              </h4>
            </div>

            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-black leading-tight text-center lg:text-left">
              Ofrecemos frutos secos de calidad, sabrosos y listos para
              disfrutar.
            </p>

            <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed text-center lg:text-left">
              Somos una marca que selecciona y combina los mejores frutos secos
              y deshidratados. Nuestros mixes están pensados para acompañar un
              estilo de vida saludable y llegan frescos directo a tu casa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionUS;
