import { Menu, Search, MapPin, ShoppingCart, User } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cep, setCep] = useState("20000-000");

  return (
    <header className="bg-white border-b border-gray-200 py-4 px-4 top-8 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4">
        {/* Logo Brand */}
        <div className="flex items-center justify-between w-full md:w-auto gap-4">
          <div className="bg-green-600 text-white font-black tracking-tighter px-4 py-2 text-2xl flex flex-col uppercase leading-none rounded-sm cursor-pointer">
            <span>Leroy</span>
            <span className="text-sm font-light tracking-widest border-t border-white/40 mt-1 pt-0.5">
              Merlin
            </span>
          </div>

          {/* Mobile Menu Trigger */}
          <button className="md:hidden p-2 text-gray-600">
            <Menu size={24} />
          </button>
        </div>

        {/* Department Dropdown Button */}
        <button className="hidden md:flex items-center gap-2 bg-green-700 text-white font-semibold px-5 py-3 rounded-md hover:bg-green-800 transition-colors shrink-0">
          <Menu size={20} />
          <span>Departamentos</span>
        </button>

        {/* Search Bar Component */}
        <div className="w-full relative flex items-center">
          <input
            type="text"
            placeholder="O que você está procurando para a sua casa hoje?"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-100 border border-gray-300 rounded-md py-3 pl-4 pr-12 focus:outline-none focus:border-green-600 focus:bg-white transition-all text-sm"
          />
          <button className="absolute right-3 p-1.5 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
            <Search size={18} />
          </button>
        </div>

        {/* User Actions & Cart */}
        <div className="flex items-center justify-end w-full md:w-auto gap-6 shrink-0">
          {/* Delivery/CEP Selector Component */}
          <div className="flex items-center gap-2 text-left cursor-pointer group">
            <MapPin
              className="text-green-600 group-hover:scale-110 transition-transform"
              size={22}
            />
            <div className="text-xs">
              <p className="text-gray-400">Entregar em</p>
              <p className="font-semibold text-gray-700">{cep}</p>
            </div>
          </div>

          {/* Account */}
          <div className="flex items-center gap-2 cursor-pointer hover:text-green-700 transition-colors">
            <User size={22} className="text-gray-600" />
            <div className="text-xs hidden lg:block">
              <p className="text-gray-400">Olá, faça seu</p>
              <p className="font-semibold">Login ou Cadastro</p>
            </div>
          </div>

          {/* Cart Counter */}
          <div className="relative cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ShoppingCart size={24} className="text-gray-700" />
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white font-bold text-xxs w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
