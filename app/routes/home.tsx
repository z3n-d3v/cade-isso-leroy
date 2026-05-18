import type { Route } from "./+types/home";
import { useState } from "react";

import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { CategoriesGrid } from "../components/CategoriesGrid";
import { ProductsGrid } from "../components/ProductsGrid";

import {
  Phone,
  Menu,
  MapPin,
  User,
  ShoppingCart,
  ChevronRight,
  Truck,
  ShieldCheck,
  ArrowUpRight,
  Star,
  Search,
  Heart,
} from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans antialiased">
      {/* 1. TOP BANNER / UTILITIES */}
      <div className="bg-gray-100 border-b border-gray-200 text-xs py-2 px-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-gray-600">
              <Phone size={14} /> Televendas: 4020-5376
            </span>
            <span className="text-green-700 font-medium cursor-pointer hover:underline">
              Leroy Merlin Pay & Cartão Celebre!
            </span>
          </div>
          <div className="flex items-center gap-4 text-gray-600">
            <span className="hover:underline cursor-pointer">Nossas Lojas</span>
            <span className="hover:underline cursor-pointer">Ajuda / FAQ</span>
            <span className="hover:underline cursor-pointer font-semibold text-green-700">
              Leroy Merlin Decora 3D
            </span>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER */}
      <Header />

      {/* 3. HERO BANNER SECTION */}
      <Hero />

      {/* 4. VALUE PROPOSITION HORIZONTAL RIBBON */}
      <section className="max-w-7xl mx-auto px-4 mt-6">
        <div className="bg-white border border-gray-200 rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 md:divide-x divide-gray-100 shadow-xs">
          <div className="p-4 flex items-center gap-3">
            <Truck className="text-green-600 shrink-0" size={28} />
            <div>
              <h4 className="font-bold text-sm">Retire na Loja Grátis</h4>
              <p className="text-xs text-gray-500">
                Compre online e retire em até 2h
              </p>
            </div>
          </div>
          <div className="p-4 flex items-center gap-3">
            <ShieldCheck className="text-green-600 shrink-0" size={28} />
            <div>
              <h4 className="font-bold text-sm">Garantia Estendida</h4>
              <p className="text-xs text-gray-500">
                Mais segurança para seus aparelhos
              </p>
            </div>
          </div>
          <div className="p-4 flex items-center gap-3">
            <ArrowUpRight className="text-green-600 shrink-0" size={28} />
            <div>
              <h4 className="font-bold text-sm">Serviço de Instalação</h4>
              <p className="text-xs text-gray-500">
                Mão de obra homologada e garantida
              </p>
            </div>
          </div>
          <div className="p-4 flex items-center gap-3">
            <Star className="text-orange-500 shrink-0" size={28} />
            <div>
              <h4 className="font-bold text-sm">Leroy Merlin Pay</h4>
              <p className="text-xs text-gray-500">
                Cashback e condições exclusivas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. QUICK CATEGORY CARDS GRID */}
      <CategoriesGrid />

      {/* 6. PRODUCT GRID (THE ICONIC LEROY SHELF) */}
      <ProductsGrid />

      {/* 7. INSTITUTIONAL FOOTER */}
      <Footer />
    </div>
  );
}
