import Bimestre from '../bimestre/Bimestre'

const Bimestre3 = () => {
  const disciplinas = ['Biologia', 'Artes', 'Sociologia', 'Geografia']
  return <Bimestre 
            bimestreAtual="Bimestre 3" 
            bimestreNome="TERCEIRO" 
            disciplinas={disciplinas} 
        />
};

export default Bimestre3