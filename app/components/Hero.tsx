import { ChevronRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-6">
      <div className="bg-gradient-to-r from-green-800 to-green-600 rounded-xl overflow-hidden shadow-md text-white p-8 md:p-12 relative flex flex-col justify-center min-h-[320px]">
        <div className="max-w-lg space-y-4 z-10">
          <span className="bg-orange-500 text-white font-bold uppercase text-xs px-3 py-1 rounded-full tracking-wider">
            Festival da Renovação
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Sua casa pronta para qualquer estação.
          </h1>
          <p className="text-green-100 text-sm md:text-base">
            Até 10x sem juros no cartão Celebre! Parcelas facilitadas direto
            pelo nosso APP de cara nova.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <button className="bg-white text-green-800 font-bold px-6 py-3 rounded-md shadow hover:bg-gray-100 transition-all flex items-center gap-2 text-sm">
              Confira as Ofertas <ChevronRight size={16} />
            </button>
            <button className="bg-transparent border border-white font-semibold px-6 py-3 rounded-md hover:bg-white/10 transition-all text-sm">
              Baixar o APP
            </button>
          </div>
        </div>
        {/* Decorative generic architectural grid overlay pattern representing building concept */}
        <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-10 hidden md:block border-l border-white/20 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>
    </section>
  );
};
