const CTASection = () => {
  return (
    <section className="w-full pb-24 pt-8 px-10 bg-gray-100">
      <a
        href="/products"
        className="block w-full bg-linear-to-tr from-yellow-600 via-yellow-500/90 to-yellow-500/60 py-6 px-4 shadow transition-all duration-300 hover:shadow-2xl rounded-xl group"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white transition-all duration-300 group-hover:drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] tracking-wide">
            Premium Industrial Engineering Components & Custom Solutions for
            Your Business
          </h2>
        </div>
      </a>
    </section>
  );
};

export default CTASection;
