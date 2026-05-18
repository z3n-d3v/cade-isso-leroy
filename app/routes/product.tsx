import React, { useState } from "react";
import {
  Search,
  Menu,
  ShoppingCart,
  User,
  MapPin,
  ChevronRight,
  Heart,
  Star,
  Phone,
  ShieldCheck,
  Truck,
  ArrowUpRight,
  Share2,
  Check,
  Info,
  Minus,
  Plus,
  Store,
  Calendar,
  Compass,
  Calculator,
  Image,
  Sparkles,
} from "lucide-react";

export default function Product() {
  // Estados da página de produto
  const [searchTerm, setSearchTerm] = useState("");
  const [cep, setCep] = useState("20000-000");
  const [quantidade, setQuantidade] = useState(1);
  const [abaAtiva, setAbaAtiva] = useState("descricao");
  const [imagemSelecionada, setImagemSelecionada] = useState(0);

  const opcoes = [
    {
      text: "Iniciar Rota no Indoor Maps Leroy",
      icon: <Compass className="text-green-700" size={20} />,
    },
    {
      text: "Calculadora de Obras Inteligente",
      icon: <Calculator className="text-green-700" size={20} />,
    },
    {
      text: "Upload de Inspiração",
      icon: <Image className="text-green-700" size={20} />,
    },
    {
      text: "Dúvida Técnica ou Manual",
      icon: <Info className="text-green-700" size={20} />,
    },
  ];

  // Imagens mockadas realistas para o Refletor Solar
  const imagensProduto = [
    "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=600&q=80", // Foto principal (Simulação de Luminária/Refletor externa)
    "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80", // Detalhe técnico
    "https://images.unsplash.com/photo-1620735398239-65780eb170d1?w=600&q=80", // Placa solar instalada
  ];

  const especificacoes = [
    { item: "Tipo de Refletor", valor: "Solar" },
    { item: "Potência", valor: "5 W" },
    { item: "Quantidade de Lúmens", valor: "530 lm" },
    { item: "Cor da Luz", valor: "Branco Neutro (4000K)" },
    { item: "Grau de Proteção", valor: "IP44 (Resistente a respingos)" },
    { item: "Marca", valor: "Inspire (Exclusividade Leroy Merlin)" },
    { item: "Autonomia", valor: "Até 8 horas após carga completa" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans antialiased">
      {/* 1. TOP BANNER / UTILITIES (Igual ao da Home para consistência) */}
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
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER */}
      <header className="bg-white border-b border-gray-200 py-4 px-4 sticky top-8 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center justify-between w-full md:w-auto gap-4">
            <div className="bg-green-600 text-white font-black tracking-tighter px-4 py-2 text-2xl flex flex-col uppercase leading-none rounded-sm cursor-pointer">
              <span>Leroy</span>
              <span className="text-sm font-light tracking-widest border-t border-white/40 mt-1 pt-0.5">
                Merlin
              </span>
            </div>
            <button className="md:hidden p-2 text-gray-600">
              <Menu size={24} />
            </button>
          </div>

          <button className="hidden md:flex items-center gap-2 bg-green-700 text-white font-semibold px-5 py-3 rounded-md hover:bg-green-800 transition-colors shrink-0">
            <Menu size={20} />
            <span>Departamentos</span>
          </button>

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

          <div className="flex items-center justify-end w-full md:w-auto gap-6 shrink-0">
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

            <div className="flex items-center gap-2 cursor-pointer hover:text-green-700 transition-colors">
              <User size={22} className="text-gray-600" />
              <div className="text-xs hidden lg:block">
                <p className="text-gray-400">Olá, faça seu</p>
                <p className="font-semibold">Login ou Cadastro</p>
              </div>
            </div>

            <div className="relative cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingCart size={24} className="text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white font-bold text-xxs w-5 h-5 rounded-full flex items-center justify-center">
                {quantidade > 0 ? quantidade : 0}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* 3. BREADCRUMBS (Caminho de Ratos) */}
      <nav className="max-w-7xl mx-auto px-4 py-4 text-xs text-gray-500 flex items-center gap-2 flex-wrap">
        <span className="hover:text-green-700 cursor-pointer">Home</span>
        <ChevronRight size={12} />
        <span className="hover:text-green-700 cursor-pointer">Iluminação</span>
        <ChevronRight size={12} />
        <span className="hover:text-green-700 cursor-pointer">
          Iluminação Externa
        </span>
        <ChevronRight size={12} />
        <span className="hover:text-green-700 cursor-pointer">Refletores</span>
        <ChevronRight size={12} />
        <span className="text-gray-800 font-medium truncate">
          Refletor Solar LED Luz Neutro 5W Inspire
        </span>
      </nav>

      {/* 4. MAIN PRODUCT CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        {/* LEFT COLUMN: IMAGES (6 colunas no desktop) */}
        <section className="lg:col-span-7 bg-white border border-gray-200 rounded-xl p-4 flex flex-col md:flex-row gap-4">
          {/* Thumbnails list */}
          <div className="flex md:flex-col gap-2 order-2 md:order-1 overflow-x-auto md:overflow-x-visible shrink-0">
            {imagensProduto.map((img, index) => (
              <button
                key={index}
                onClick={() => setImagemSelecionada(index)}
                className={`w-16 h-16 border-2 rounded-md overflow-hidden bg-gray-50 flex-none transition-all ${imagemSelecionada === index ? "border-green-600 shadow-xs" : "border-gray-200 hover:border-gray-400"}`}
              >
                <img
                  src={img}
                  alt="Miniatura do produto"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Featured Main Image */}
          <div className="flex-1 bg-gray-50 rounded-lg overflow-hidden border border-gray-100 flex items-center justify-center relative min-h-[350px] md:min-h-[450px] order-1 md:order-2">
            <span className="absolute top-3 left-3 bg-neutral-900 text-white font-extrabold text-xxs px-2.5 py-1 rounded-sm uppercase tracking-wider">
              Marca Exclusiva
            </span>
            <img
              src={imagensProduto[imagemSelecionada]}
              alt="Refletor Solar LED Inspire"
              className="w-full h-full object-cover max-h-[450px]"
            />
            <div className="absolute bottom-3 right-3 flex gap-2">
              <button className="p-2 bg-white rounded-full text-gray-500 shadow-xs hover:text-green-600 transition-colors">
                <Share2 size={16} />
              </button>
              <button className="p-2 bg-white rounded-full text-gray-500 shadow-xs hover:text-red-500 transition-colors">
                <Heart size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* RIGHT COLUMN: BUY BOX (5 colunas no desktop) */}
        <section className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs">
            {/* Header info */}
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-wider font-extrabold text-green-700">
                Inspire
              </p>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                Refletor Solar LED Luz Neutro 5W 530 Lúmens IP44 Inspire
              </h1>
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <span className="font-bold text-gray-700">4.7</span>
                  <span className="text-gray-400">(42 avaliações)</span>
                </div>
                <span className="text-gray-300">|</span>
                <span className="text-gray-500 font-medium">Ref: 91882196</span>
              </div>
            </div>

            {/* Price section */}
            <div className="border-t border-b border-gray-100 my-4 py-4 space-y-1">
              <span className="text-xxs font-bold text-gray-400 uppercase tracking-wide">
                Preço válido para o CEP {cep}
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-bold text-gray-900">R$</span>
                <span className="text-4xl font-black text-gray-900 tracking-tight">
                  189,90
                </span>
                <span className="text-sm font-medium text-gray-500">/cada</span>
              </div>
              <p className="text-xs text-gray-600 font-medium">
                Ou{" "}
                <span className="font-bold text-gray-900">1x de R$ 189,90</span>{" "}
                sem juros no Cartão Celebre!
              </p>
            </div>

            {/* Quantidade Selector */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <span className="text-xs font-bold text-gray-700">
                Quantidade:
              </span>
              <div className="flex items-center border border-gray-300 rounded-md bg-gray-50">
                <button
                  onClick={() => setQuantidade(Math.max(1, quantidade - 1))}
                  className="p-2 px-3 text-gray-600 hover:bg-gray-200 transition-colors rounded-l-md"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center font-bold text-sm text-gray-800">
                  {quantidade}
                </span>
                <button
                  onClick={() => setQuantidade(quantidade + 1)}
                  className="p-2 px-3 text-gray-600 hover:bg-gray-200 transition-colors rounded-r-md"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-green-600 text-white font-black py-4 rounded-lg hover:bg-green-700 shadow-md hover:shadow-lg active:scale-[0.99] transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-2">
                <ShoppingCart size={18} strokeWidth={2.5} />
                Adicionar ao Carrinho
              </button>
              <button className="w-full bg-orange-500 text-white font-black py-4 rounded-lg hover:bg-orange-600 shadow-xs text-sm uppercase tracking-wider transition-colors">
                Comprar Agora
              </button>
            </div>
          </div>

          {/* Delivery & Pickup Simulation Card */}

          <div className="flex items-start gap-4 mb-6">
            {/* Ícone de Estrelas/Brilho (IA) com o fundo verde circular sutil */}
            <div className="bg-green-100 p-3 rounded-full flex items-center justify-center shrink-0">
              <Sparkles
                className="text-green-700"
                size={24}
                fill="currentColor"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                Cade isso Leroy?
              </h3>
              <p className="text-sm text-gray-600 mt-0.5 leading-tight">
                Deixe a Inteligência Artificial da Leroy calcular, encontrar e
                guiar você.
              </p>
            </div>
          </div>

          {/* Lista de Botões/Opções */}
          <div className="space-y-3">
            {opcoes.map((opcao, index) => (
              <button
                key={index}
                className="w-full flex items-center gap-4 bg-white border border-gray-300 rounded-xl p-4 text-left transition-all hover:border-green-600 hover:shadow-xs group active:scale-[0.99]"
              >
                {/* Círculo do ícone cinza claro que muda para verde suave no hover */}
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-green-50 transition-colors">
                  {opcao.icon}
                </div>

                <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                  {opcao.text}
                </span>
              </button>
            ))}
          </div>
        </section>
      </main>

      {/* 5. DESCRIPTION, FEATURES & TECHNICAL TABS SECTION */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xs">
          {/* Tabs Navigation Header */}
          <div className="border-b border-gray-200 bg-gray-50 flex">
            <button
              onClick={() => setAbaAtiva("descricao")}
              className={`px-6 py-4 font-bold text-sm border-b-2 transition-all ${abaAtiva === "descricao" ? "border-green-600 text-green-700 bg-white" : "border-transparent text-gray-500 hover:text-gray-800"}`}
            >
              Descrição do Produto
            </button>
            <button
              onClick={() => setAbaAtiva("especificacoes")}
              className={`px-6 py-4 font-bold text-sm border-b-2 transition-all ${abaAtiva === "especificacoes" ? "border-green-600 text-green-700 bg-white" : "border-transparent text-gray-500 hover:text-gray-800"}`}
            >
              Características Técnicas
            </button>
          </div>

          {/* Tabs Body Content */}
          <div className="p-6 md:p-8">
            {abaAtiva === "descricao" && (
              <div className="space-y-4 max-w-4xl text-sm leading-relaxed text-gray-600">
                <h3 className="text-lg font-bold text-gray-900">
                  Ilumine seus espaços externos com energia limpa e sustentável!
                </h3>
                <p>
                  O <strong>Refletor Solar LED Inspire</strong> é a solução
                  perfeita para quem busca aliar alta eficiência luminosa,
                  segurança e economia de energia. Equipado com um painel
                  fotovoltaico de alta performance, ele absorve a luz solar
                  durante o dia e converte automaticamente em iluminação ao
                  anoitecer.
                </p>
                <p>
                  Com tonalidade de luz branca neutra (4000K), ele proporciona
                  uma atmosfera moderna, clara e confortável para quintais,
                  fachadas, garagens ou jardins. Sua instalação é 100% livre de
                  fios, facilitando o posicionamento onde houver maior
                  incidência de sol.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs font-medium text-gray-700">
                  <div className="flex items-center gap-2">
                    <Check size={16} className="text-green-600" /> Resistente a
                    chuva leve e poeira (IP44)
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={16} className="text-green-600" /> Painel solar
                    integrado de longa vida útil
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={16} className="text-green-600" /> Sensor
                    crepuscular (Acende sozinho à noite)
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={16} className="text-green-600" /> Zero consumo
                    na sua conta de energia elétrica
                  </div>
                </div>
              </div>
            )}

            {abaAtiva === "especificacoes" && (
              <div className="max-w-2xl">
                <div className="border border-gray-100 rounded-lg overflow-hidden divide-y divide-gray-100">
                  {especificacoes.map((esp, idx) => (
                    <div
                      key={idx}
                      className="grid grid-cols-2 p-3 text-sm hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-600">
                        {esp.item}
                      </span>
                      <span className="text-gray-800">{esp.valor}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-amber-50 rounded-lg flex gap-2 items-start text-xs text-amber-800">
                  <Info size={16} className="shrink-0 mt-0.5" />
                  <p>
                    As especificações informadas são fornecidas diretamente pelo
                    fabricante Inspire, marca de controle e exclusividade Leroy
                    Merlin.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. INSTITUTIONAL FOOTER (Idêntico ao da Home para manter o padrão do site) */}
      <footer className="bg-neutral-900 text-gray-300 pt-12 pb-6 px-4 border-t-4 border-green-600">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="bg-green-600 text-white font-black tracking-tighter px-3 py-1.5 text-xl inline-flex flex-col uppercase leading-none rounded-sm">
              <span>Leroy</span>
              <span className="text-xs font-light tracking-widest border-t border-white/30 mt-0.5 pt-0.5">
                Merlin
              </span>
            </div>
            <p className="text-xs text-neutral-400">
              A Leroy Merlin ajuda você em todas as etapas de sua obra, reforma
              ou decoração. Encontre tudo com o melhor custo-benefício.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-4">
              Construir e Reformar
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li className="hover:text-white cursor-pointer">
                Materiais de Construção
              </li>
              <li className="hover:text-white cursor-pointer">
                Pisos e Revestimentos
              </li>
              <li className="hover:text-white cursor-pointer">
                Ferramentas Manuais e Elétricas
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-4">
              Serviços e Vantagens
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li className="hover:text-white cursor-pointer">
                Cursos de Bricolagem
              </li>
              <li className="hover:text-white cursor-pointer">
                Fábrica de Cores
              </li>
              <li className="hover:text-white cursor-pointer">
                Serviço de Instalação
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-4">
              Siga-nos nas redes
            </h4>
            <div className="flex gap-3 text-neutral-400 mb-4">
              <span className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-green-600 hover:text-white cursor-pointer text-xs font-bold">
                FB
              </span>
              <span className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-green-600 hover:text-white cursor-pointer text-xs font-bold">
                IG
              </span>
              <span className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-green-600 hover:text-white cursor-pointer text-xs font-bold">
                YT
              </span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-neutral-800 pt-6 flex flex-col md:flex-row justify-between items-center text-xxs text-neutral-500 gap-4">
          <p>© 2026 Leroy Merlin. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
