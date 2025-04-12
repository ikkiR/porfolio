import Machtools from '../assets/Pagina-inicial.svg'
import Toolist from '../assets/captura-Api-TooList.PNG'
import PixelGames from '../assets/Captura-Pixel-games.PNG'

import 'devicon/devicon.min.css';

export default function Projetos() {
  const projetos = [
    {
      nome: "ERP - Machtools",
      descricao: "Organizador de setor de usinagem",
      imagem: Machtools,
      link: "https://youtu.be/61cwz9TIpQ8",
      tecnologias: ["devicon-html5-plain", "devicon-css3-plain", "devicon-javascript-plain", "devicon-python-plain", "devicon-firebase-plain", "devicon-flask-original"]
    },
    {
      nome: "Api - TooList",
      descricao: "Api que fornece a informação e localizaçõ de ferramentas.",
      imagem: Toolist,
      link: "https://www.youtube.com/watch?v=enNO5C_WRlw",
      tecnologias: ["devicon-python-plain", "devicon-flask-original", "devicon-firebase-plain"]
    },
    {
      nome: "Pixel-games",
      descricao: "Loja de jogos",
      imagem: PixelGames,
      link: "https://drive.google.com/drive/folders/1oMSJyU9b57XOl9b6Cei-9fDc-eh6v-u4?usp=drive_link",
      tecnologias: ["devicon-javascript-plain", "devicon-html5-plain", "devicon-css3-plain"]
    }
  ];

  return (
    <article id='Projetos' className='bg-[#F5F3FA] dark:bg-[#F5F3FA] py-28'>
       <div className='text-center mb-32 group'>
            <h2 className='relative inline-block text-purple-600 dark:text-purple-400 font-semibold text-4xl animate-fade-in transition-colors duration-300'>
                Projetos
                <span className="absolute left-0 -bottom-1 h-1 w-0 bg-purple-600 dark:bg-purple-400 transition-all duration-500 group-hover:w-full"></span>
            </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 max-w-7xl mx-auto">
            {projetos.map((projeto, index) => (
            <a
                key={index}
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-xl overflow-hidden aspect-square shadow-lg hover:scale-105 transition-all duration-300"
            >
                <div
                style={{
                    backgroundImage: `url(${projeto.imagem})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
                className="w-full h-full"
                >
                <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-5">
                    <h3 className="text-white text-xl font-bold mb-1">{projeto.nome}</h3>
                    <p className="text-white text-sm mb-3">{projeto.descricao}</p>
                    <div className="flex gap-3">
                    {projeto.tecnologias.map((icon, idx) => (
                        <i key={idx} className={`${icon} text-white text-sm`} />
                    ))}
                    </div>
                </div>
                </div>
            </a>
            ))}
        </div>
    </article>
  );
}