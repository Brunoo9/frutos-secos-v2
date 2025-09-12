const SectionAbout = () => {
  return (
    <section
      id="sobre-nosotros"
      className="px-4 md:px-8 lg:px-20 mt-10 md:mt-32 lg:mt-60 mb-24 md:mb-32 lg:mb-52"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start justify-center ">
          <h3 className="ml-0 md:ml-4 lg:ml-10 text-xl md:text-2xl  font-semibold mb-6 md:mb-8 lg:mb-10">
            ¿Cómo funciona Frutos{" "}
            <span className="relative">
              Alvear{" "}
              <div className="absolute bottom-0 right-2 md:right-4 lg:right-6 w-20 md:w-24 lg:w-30 h-1 bg-orange-400 rounded-full"></div>
            </span>
            ?
          </h3>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center md:justify-evenly">
          <div className="flex flex-col items-center text-center">
            <p className="text-lg md:text-xl lg:text-2xl font-semibold">
              Elegís tus productos favoritos
            </p>
            <p className="text-sm md:text-base lg:text-lg">
              Puede ser por 1kg o por 500gr
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <p className="text-lg md:text-xl lg:text-2xl font-semibold">
              Vas a tu carrito
            </p>
            <p className="text-sm md:text-base lg:text-lg">
              {" "}
              Visualizas lo elegido
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <p className="text-lg md:text-xl lg:text-2xl font-semibold">
              ¡Nos envías el pedido!
            </p>
            <p className="text-sm md:text-base lg:text-lg">
              Nosotros te lo enviamos a tu casa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
