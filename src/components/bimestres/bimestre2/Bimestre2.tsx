import Bimestre from '../bimestre/Bimestre'

const disciplinas = ['Biologia', 'Artes', 'Sociologia', 'Geografia']

const Bimestre2 = () => {
  
  return <Bimestre 
            bimestreAtual="Bimestre 2" 
            bimestreNome="SEGUNDO" 
            disciplinas={disciplinas} 
        />
};

export default Bimestre2