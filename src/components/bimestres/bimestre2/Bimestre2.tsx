import { useState, useEffect  } from 'react'
import axios from 'axios'
import Card from '../../card/Cards'
import Trash from '../../../assets/Trash.svg'
import BtnLancarNota from '../../btn/BtnLancarNota'
import Modal from '../../modal/Modal';
import './Bimestre2.css'

interface Nota {
    id: string;
    disciplina: string;
    criadoEm: string; // ou outro tipo para representar a data
    nota: string; // ou outro tipo para representar a nota
}

function Bimestre2() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [notas, setNotas] = useState<Nota[]>([])
    const bimestreNome = "Bimestre 2"

    const handleOpenModal = () => {
        setIsModalOpen(true)
      };

    const handleCloseModal = () => {
        setIsModalOpen(false)
        fetchData()
    };

    const handleDelete = async (notaId: string) => {
        try {
          await axios.delete(`http://localhost:3333/resultados/${notaId}`);
          fetchData();
        } catch (error) {
          console.error('Erro ao excluir nota:', error);
        }
    };

    const fetchData = async () => {
        try {
            const response = await axios.get<Nota[]>('http://localhost:3333/resultados/SEGUNDO')
            setNotas(response.data ?? [])
        } catch (error) {
            console.error('Erro ao obter notas do bimestre1:', error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='container'>
            <div className='infoContainer'>
                <label className='bimestres'>Bimestre 2</label>
                <div className="tooltip-container">
                    <BtnLancarNota  onClick={handleOpenModal} />
                    <span className="tooltiptext">Adicionar</span>
                </div>
            </div>
            <div className='containerCard'>
                {notas.map((nota) => (
                    <div className='card' key={nota.id}>
                        <div className={`card${nota.disciplina}`}>
                            <Card
                                disciplina={nota.disciplina}
                                dataDeLancamento={nota.criadoEm}
                                nota={nota.nota.toString()}
                            />
                        </div>
                        <div>
                            <button className='deleteButton' onClick={() => handleDelete(nota.id)}>
                                <img className='trash' src={Trash} alt='trash' />
                                <span className="tooltiptext">Remover</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <Modal 
                isOpen={isModalOpen} 
                onClose={handleCloseModal} 
                bimestreNome={bimestreNome}
                bimestre="SEGUNDO"
                disciplinas={['Biologia', 'Artes', 'Geografia', 'Sociologia']}
            >
                {/* Conteúdo do seu modal aqui */}
                <p>Qualquer conteúdo desejado pode ser adicionado aqui.</p>
            </Modal>
        </div>
    )
}

export default Bimestre2