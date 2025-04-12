import React from "react";
import Header from "./components/Header";
import Sobremin from "./components/Sobremin";
import Projetos from "./components/Projetos";
import Footer from "./components/Footer";
import Apresentacao from "./components/Apresentacao";
import Habilidades from "./components/Habilidades";
import Contato from "./components/Contato";



function App(){
  return(
    <div className="scroll-smooth">
      <Header />
      <Apresentacao />
      <Sobremin />
      <Habilidades />
      <Projetos />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
