import { useState } from 'react';
import 'devicon/devicon.min.css';

export default function Habilidades() {
    const [hoveredLanguage, setHoveredLanguage] = useState(null);

    const languages = [
        { icon: "python-plain", name: "Python" },
        { icon: "javascript-plain", name: "JavaScript" },
        { icon: "html5-plain", name: "HTML5" },
        { icon: "css3-plain", name: "CSS3" },
        { icon: "tailwindcss-original", name: "TailwindCSS" },
        { icon: "django-plain", name: "Django" },
        { icon: "figma-plain", name: "Figma" },
        { icon: "react-original", name: "React"}
    ];

    return (
        <article id='Habilidades' className='bg-[#F5F3FA] dark:bg-[#1a1124] py-40'>
            <div className='min-h-[600px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start gap-10 bg-white dark:bg-[#0B0C10] rounded-2xl shadow-xl p-8 dark:text-white justify-between'>

                <div className=' p-0 sm:pt-64 sm:pl-32 mb-10 group'>
                    <h2 className='relative inline-block text-purple-600 dark:text-purple-400 font-semibold text-4xl animate-fade-in transition-colors duration-300'>
                        {hoveredLanguage || "Habilidades"}
                        <span className="absolute left-0 -bottom-1 h-1 w-0 bg-purple-600 dark:bg-purple-400 transition-all duration-500 group-hover:w-full"></span>
                    </h2>
                </div>

                <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-16'>
                    {languages.map((lang, index) => (
                        <article
                            key={index}
                            onMouseEnter={() => setHoveredLanguage(lang.name)}
                            onMouseLeave={() => setHoveredLanguage(null)}
                            className='bg-[#1e152e] aspect-square rounded shadow-md p-10 border-2 border-transparent hover:border-purple-700 hover:scale-105 hover:shadow-purple-700/50 transition-all duration-300 group flex items-center justify-center'
                        >
                            <i className={`devicon-${lang.icon} text-4xl text-purple-700 group-hover:text-purple-400 group-hover:drop-shadow-[0_0_10px_#9333ea] transition`} />
                        </article>
                    ))}
                </div>
            </div>
        </article>
    );
}