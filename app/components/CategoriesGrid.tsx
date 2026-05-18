import { ChevronRight } from "lucide-react";
import { Categories } from "../data/categories";

export const CategoriesGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-10">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">
            Navegue por Departamentos
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Tudo do alicerce ao acabamento da sua obra
          </p>
        </div>
        <span className="text-sm font-bold text-green-700 hover:underline cursor-pointer flex items-center gap-1">
          Ver todos <ChevronRight size={16} />
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-3">
        {Categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:border-green-500 hover:shadow-md transition-all group"
          >
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
              {cat.icone}
            </div>
            <span className="text-xs font-semibold text-gray-700 group-hover:text-green-700 line-clamp-2">
              {cat.nome}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
