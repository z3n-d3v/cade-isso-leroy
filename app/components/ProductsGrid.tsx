import { Heart, Star, ShoppingCart } from "lucide-react";
import { Products } from "../data/products";
import { Link } from "react-router";

export const ProductsGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-12 mb-16">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">
            Mais Procurados em Nossas Lojas
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Produtos com estoque garantido e melhores preços
          </p>
        </div>
        <div className="flex gap-2">
          <span className="bg-green-50 border border-green-200 text-green-800 font-bold px-3 py-1 rounded text-xs">
            Destaques
          </span>
          <span className="bg-white border border-gray-200 text-gray-600 font-medium px-3 py-1 rounded text-xs cursor-pointer hover:bg-gray-50">
            Ofertas
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {Products.map((prod) => (
          <div
            key={prod.id}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden p-4 relative flex flex-col justify-between group hover:shadow-lg transition-all"
          >
            {/* Badge & Whishlist */}
            <div className="flex justify-between items-center absolute top-3 left-3 right-3 z-10">
              <span className="bg-orange-500 text-white font-extrabold text-xxs px-2 py-0.5 rounded-sm uppercase tracking-wide">
                {prod.tag}
              </span>
              <button className="bg-white/80 backdrop-blur-xs p-1.5 rounded-full text-gray-400 hover:text-red-500 transition-colors shadow-xs">
                <Heart size={16} />
              </button>
            </div>

            {/* Product Image */}
            <div className="w-full h-44 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden mb-4 mt-2">
              <Link to="/product" className="hover:underline">
                <img
                  src={prod.img}
                  alt={prod.nome}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>

            {/* Info Body */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <p className="text-xxs uppercase font-bold tracking-widest text-gray-400 mb-0.5">
                  {prod.marca}
                </p>
                <h3 className="text-xs md:text-sm text-gray-700 font-medium line-clamp-3 mb-2 group-hover:text-green-700 transition-colors">
                  {prod.nome}
                </h3>

                {/* Stars Rating */}
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-xxs font-bold text-gray-400">
                    ({prod.avaliacao})
                  </span>
                </div>
              </div>

              {/* Pricing Block */}
              <div>
                <div className="border-t border-gray-100 pt-3">
                  <p className="text-xxs text-gray-400 font-medium">
                    Preço exclusivo internet
                  </p>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-xs font-bold text-gray-900">R$</span>
                    <span className="text-2xl font-black text-gray-900 tracking-tight">
                      {prod.preco}
                    </span>
                    <span className="text-xs font-medium text-gray-500">
                      /{prod.unidade}
                    </span>
                  </div>
                </div>

                {/* Add To Cart CTA Button */}
                <button className="w-full mt-4 bg-green-600 text-white font-bold py-2.5 rounded-md hover:bg-green-700 active:bg-green-800 transition-colors text-xs flex items-center justify-center gap-2 shadow-xs">
                  <ShoppingCart size={14} />
                  <span>Adicionar ao carrinho</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
