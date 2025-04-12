import imagemChamado from '../assets/imagem-chamado.jpg';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';



export default function Sobremin() {
    return(
        <article id="Sobre" className="bg-[#F5F3FA] dark:bg-[#F5F3FA] py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10 bg-white dark:bg-[#0B0C10] rounded-2xl shadow-xl p-8 dark:text-white hover:scale-95 active:scale-90 transition-transform duration-150">
                <div className='w-full max-w-xl flex justify-center'> 
                    <img src={imagemChamado} alt=""  className='rounded-xl w-full max-w-md shadow-lg'/>
                </div>

                <div className='w-full md:w-1/2 text-center md:text-left'>
                    <h2 className='text-purple-600 dark:text-purple-400 font-semibold text-lg mb-2'>Sobre mim</h2>
                    <p className=' font-poppins text-gray-700 dark:text-gray-300 text-sm md:text-base mb-6 leading-relaxed '> 
                        Sou desenvolvedor <strong>Full Stack</strong> e estudante de <strong>Engenharia da Computação</strong>.
                        Tenho experiência prática com <strong>Python</strong>, <strong>JavaScript</strong>, <strong>HTML</strong> e <strong>CSS</strong>,
                        além dos frameworks <strong>Django</strong> e <strong>React</strong>.
                        <br /><br />
                        Acredito que a tecnologia deve ir além do código — ela deve <strong>resolver problemas reais</strong>.
                        Por isso, busco aplicar meu conhecimento em projetos que impactam minha vida e a da minha comunidade.
                        Sou movido por inovação, aprendizado constante e pelo desejo de transformar o mundo com tecnologia.
                    </p>


                    <div className='flex justify-center md:justify-start gap-4'>
                        <a href="mailto:kaiquirocha595@outlook.com" target="_blank" rel="noopener noreferrer">
                            <FaEnvelope className="text-xl text-purple-600 dark:text-white hover:text-purple-800 transition dark:hover:text-purple-800 transition" />
                        </a>
                        <a href="https://www.linkedin.com/in/kaiquirocha2/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-xl text-purple-600 dark:text-white hover:text-purple-800 transition dark:hover:text-purple-800 transition" />
                        </a>
                        <a href="https://github.com/ikkiR" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-xl text-purple-600 dark:text-white hover:text-purple-800 transition dark:hover:text-purple-800 transition" />
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
}