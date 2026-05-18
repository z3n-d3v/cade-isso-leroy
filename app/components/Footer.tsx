export const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-gray-300 pt-12 pb-6 px-4 border-t-4 border-green-600">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="space-y-4">
          <div className="bg-green-600 text-white font-black tracking-tighter px-3 py-1.5 text-xl inline-flex flex-col uppercase leading-none rounded-sm">
            <span>Leroy</span>
            <span className="text-xs font-light tracking-widest border-t border-white/30 mt-0.5 pt-0.5">
              Merlin
            </span>
          </div>
          <p className="text-xs text-neutral-400 leading-relaxed">
            A Leroy Merlin ajuda você em todas as etapas de sua obra, reforma ou
            decoração. Encontre tudo com o melhor custo-benefício.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold text-sm mb-4">
            Construir e Reformar
          </h4>
          <ul className="space-y-2 text-xs text-neutral-400">
            <li className="hover:text-white cursor-pointer transition-colors">
              Materiais de Construção
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Pisos e Revestimentos
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Ferramentas Manuais e Elétricas
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Encanamentos e Hidráulica
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-sm mb-4">
            Serviços e Vantagens
          </h4>
          <ul className="space-y-2 text-xs text-neutral-400">
            <li className="hover:text-white cursor-pointer transition-colors">
              Cursos de Bricolagem
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Fábrica de Cores
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Corte de Madeira e Vidro
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Soluções Financeiras
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-sm mb-4">
            Siga-nos nas redes
          </h4>
          <div className="flex gap-3 text-neutral-400 mb-4">
            {/* Ícones genéricos de redes */}
            <span className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-green-600 hover:text-white cursor-pointer transition-all text-xs font-bold">
              FB
            </span>
            <span className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-green-600 hover:text-white cursor-pointer transition-all text-xs font-bold">
              IG
            </span>
            <span className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-green-600 hover:text-white cursor-pointer transition-all text-xs font-bold">
              YT
            </span>
            <span className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-green-600 hover:text-white cursor-pointer transition-all text-xs font-bold">
              LK
            </span>
          </div>
          <p className="text-xxs text-neutral-500">
            Inscrita no CNPJ nº 01.438.784/0001-05, atua exclusivamente como
            correspondente bancário da PEFISA S/A.
          </p>
        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="max-w-7xl mx-auto border-t border-neutral-800 pt-6 flex flex-col md:flex-row justify-between items-center text-xxs text-neutral-500 gap-4">
        <p>© 2026 Leroy Merlin. Todos os direitos reservados.</p>
        <div className="flex gap-4">
          <span className="hover:underline cursor-pointer">
            Termos e Condições
          </span>
          <span className="hover:underline cursor-pointer">
            Política de Privacidade
          </span>
          <span className="hover:underline cursor-pointer">
            Portal de Privacidade
          </span>
        </div>
      </div>
    </footer>
  );
};
