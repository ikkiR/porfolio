import { Github, Phone, Mail, Linkedin } from 'lucide-react';

export default function Contato() {
  const Contatos = [
    {
      icon: Mail,
      titulo: 'E-mail',
      descricao: 'kaiquirocha595@outlook.com',
      link: 'mailto:kaiquirocha595@outlook.com',
    },
    {
      icon: Phone,
      titulo: 'Telefone',
      descricao: '(11) 932729440',
      link: 'https://api.whatsapp.com/send/?phone=5511932729440&text&type=phone_number&app_absent=0',
    },
    {
      icon: Linkedin,
      titulo: 'LinkedIn',
      descricao: 'kaiquirocha2',
      link: 'https://www.linkedin.com/in/kaiquirocha2/',
    },
    {
      icon: Github,
      titulo: 'GitHub',
      descricao: 'ikkiR',
      link: 'https://github.com/ikkiR',
    },
  ];

  return (
    <article id="Contato" className='bg-[#F5F3FA] dark:bg-[#1a1124]'>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-8 max-w-7xl mx-auto rounded-xl pt-32">
        {Contatos.map((contato, index) => {
          const Icon = contato.icon;

          return (
            <a
              key={index}
              href={contato.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 p-4 border-4 border-purple-600 rounded-xl shadow-md hover:scale-105 transition-transform text-purple-600 dark:text-purple-400 dark:bg-[#0B0C10]"
            >
              <Icon className="w-8 h-8 transition duration-300 text-purple-700 group-hover:text-purple-400 group-hover:border-purple-400 group-hover:drop-shadow-[0_0_10px_#9333ea] transition " />
              <h3 className="font-semibold">{contato.titulo}</h3>
              <p className="text-sm text-center">{contato.descricao}</p>
            </a>
          );
        })}
      </div>
    </article>
  );
}