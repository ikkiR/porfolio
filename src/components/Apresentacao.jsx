import minhaFoto from '../assets/minha-imagem-editada.jpeg';
import curriculo from '../assets/curriculo-final.pdf';

export default function Apresentacao() {
    return (
        <article id="Home" className="bg-[#F5F3FA] dark:bg-[#1a1124] hover:shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Texto */}
                <div className="text-left">
                    <h2 className="font-poppins text-3xl md:text-4xl text-gray-600 font-semibold dark:text-white">
                        Olá, eu sou
                    </h2>
                    <h2 className="font-poppins text-purple-600 text-4xl md:text-6xl font-semibold mt-2">
                        Kaiqui Rocha
                    </h2>
                    <h3 className="font-poppins mt-2 text-lg md:text-xl text-gray-600 font-semibold dark:text-white">
                        Desenvolvedor Fullstack
                    </h3>
                    <p className="font-sans mt-4 text-gray-600 dark:text-gray-300 max-w-xl text-sm md:text-base">
                        Transformando os desafios de hoje na tecnologia de amanhã.
                    </p>
                    <a
                        href={curriculo} download 
                        className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-800 mt-6 shadow-md transition-transform duration-150 hover:scale-95 active:scale-90 text-sm md:text-base"
                    >
                        Download CV
                    </a>
                </div>

                {/* Imagem */}
                <a href="#imagem" className="md:w-1/2 flex justify-center md:justify-end pl-0 md:pl-12">
                    <div>
                        <img
                            src={minhaFoto}
                            alt="foto de kaiqui"
                            className="w-80 h-96 object-cover rounded-xl border-b-4 border-black drop-shadow-[0_5px_10px_rgba(128,0,128,0.5)] dark:drop-shadow-[0_4px_10px_rgba(255,255,255,0.3)] dark:border-purple-600 hover:scale-95 active:scale-90 transition-transform duration-150"
                        />
                    </div>
                </a>
            </div>
        </article>
    );
}