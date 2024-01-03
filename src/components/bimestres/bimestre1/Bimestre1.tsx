import Bimestre from '../bimestre/Bimestre'

const disciplinas = ['Biologia', 'Artes', 'Sociologia', 'Geografia']

const Bimestre1 = () => {
  
  return <Bimestre 
            bimestreAtual="Bimestre 1" 
            bimestreNome="PRIMEIRO" 
            disciplinas={disciplinas} 
        />
};

export default Bimestre1