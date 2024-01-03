import Bimestre from '../bimestre/Bimestre'

const Bimestre4 = () => {
  const disciplinas = ['Biologia', 'Artes', 'Sociologia', 'Geografia']
  return <Bimestre
            bimestreAtual="Bimestre 4" 
            bimestreNome="QUARTO" 
            disciplinas={disciplinas} 
        />;
};

export default Bimestre4