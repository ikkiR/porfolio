import { useState } from "react";
import BotaoDeTema from "./BotaoDeTema";
import { Menu, X } from "lucide-react";
import { Link } from 'react-scroll';

export default function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <header className="bg-[#F5F3FA] text-black dark:bg-[#1a1124] dark:text-white shadow-md sticky top-0 z-50 hover:shadow-xl relative overflow-hidden border-b-4 border-purple-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-transparent after:via-purple-500 after:to-transparent after:animate-shimmer">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                
              
                <div className="flex items-center gap-4">
                    <BotaoDeTema />
                    
                    <button 
                        className="md:hidden text-purple-600 dark:text-white"
                        onClick={() => setMenuAberto(!menuAberto)}
                        aria-label="Abrir ou fechar menu"
                    >
                        {menuAberto ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

             
                <nav className="hidden md:flex space-x-12 text-sm md:text-base">
                    <Link to="Home" smooth={true} duration={600} className="cursor-pointer text-gray-700 dark:text-white dark:hover:text-purple-600 hover:text-purple-600 transition">Home</Link>
                    <Link to="Sobre" smooth={true} duration={600} className="cursor-pointer text-gray-700 dark:text-white dark:hover:text-purple-600 hover:text-purple-600 transition">Sobre</Link>
                    <Link to="Habilidades" smooth={true} duration={600} className="cursor-pointer text-gray-700 dark:text-white dark:hover:text-purple-600 hover:text-purple-600 transition">Habilidades</Link>
                    <Link to="Projetos" smooth={true} duration={600} className="cursor-pointer text-gray-700 dark:text-white dark:hover:text-purple-600 hover:text-purple-600 transition">Projetos</Link>
                    <Link to="Contato" smooth={true} duration={600} className="cursor-pointer text-gray-700 dark:text-white dark:hover:text-purple-600 hover:text-purple-600 transition">Contatos</Link>
                    
                </nav>
            </div>

            {menuAberto && (
                <div className="md:hidden px-4 pb-4">
                    <nav className="flex flex-col gap-2 text-sm">
                    <Link to="Home" smooth={true} duration={600} onClick={() => setMenuAberto(false)} className="cursor-pointer text-gray-700 dark:text-white dark:hover:text-purple-600 hover:text-purple-600 transition">Home</Link>
                    <Link to="Sobre" smooth={true} duration={600} onClick={() => setMenuAberto(false)} className="cursor-pointer text-gray-700 dark:text-white dark:hover:text-purple-600 hover:text-purple-600 transition">Sobre</Link>
                    <Link to="Habilidade" smooth={true} duration={600} onClick={() => setMenuAberto(false)} className="cursor-pointer text-gray-700 dark:text-white dark:hover:text-purple-600 hover:text-purple-600 transition">Habilidades</Link>
                    <Link to="Projetos" smooth={true} duration={600} onClick={() => setMenuAberto(false)} className="cursor-pointer text-gray-700 dark:text-white dark:hover:text-purple-600 hover:text-purple-600 transition">Projetos</Link>
                    <Link to="Contato" smooth={true} duration={600} onClick={() => setMenuAberto(false)} className="cursor-pointer text-gray-700 dark:text-white dark:hover:text-purple-600 hover:text-purple-600 transition">Contatos</Link>
                    </nav>
                </div>
            )}
        </header>
    );
}