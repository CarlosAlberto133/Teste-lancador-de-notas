import { useState } from 'react';
import Card from '../../card/Cards'
import Trash from '../../../assets/Trash.svg'
import BtnLancarNota from '../../btn/BtnLancarNota'
import Modal from '../../modal/Modal';
import './Bimestre3.css'

function Bimestre3() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
      };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };


    return (
        <div className='container'>
            <div className='infoContainer'>
                <label className='bimestres'>Bimestre 3</label>
                <BtnLancarNota  onClick={handleOpenModal} />
            </div>
            <div className='containerCard'>
                <div className='card'>
                    <div className='cardBiologia'>
                        <Card
                            disciplina="Biologia"
                            dataDeLançamento="01/01/2001"
                            nota="5"
                        />
                    </div>
                    <div>
                        <img className='trash' src={Trash} alt='trash' />
                    </div>
                </div>
                
                <div className='card'>
                    <div className='cardArtes'>
                        <Card 
                            disciplina="Artes"
                            dataDeLançamento="01/01/2001"
                            nota="5"
                        />
                    </div>
                    <div>
                        <img className='trash' src={Trash} alt='trash' />
                    </div>
                </div>

                <div className='card'>
                    <div className='cardGeografia'>
                        <Card 
                            disciplina="Geografia"
                            dataDeLançamento="01/01/2001"
                            nota="5"
                        />
                    </div>
                    <div>
                        <img className='trash' src={Trash} alt='trash' />
                    </div>
                </div>

                <div className='card'>
                    <div className='cardSociologia'>
                        <Card 
                            disciplina="Sociologia"
                            dataDeLançamento="01/01/2001"
                            nota="5"
                        />
                    </div>
                    <div>
                        <img className='trash' src={Trash} alt='trash' />
                    </div>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                {/* Conteúdo do seu modal aqui */}
                <h2>Conteúdo do Modal</h2>
                <p>Qualquer conteúdo desejado pode ser adicionado aqui.</p>
            </Modal>
        </div>
    )
}

export default Bimestre3