import React, { useState } from 'react'
import axios from 'axios'
import './Modal.css'

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  bimestreNome: string
  bimestre: string
  disciplinas: string[]
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, bimestreNome, disciplinas, bimestre, ...props }) => {
  const [selectedDisciplina, setSelectedDisciplina] = useState<string | null>(null)
  const [nota, setNota] = useState<string | null>(null)

  const handleDisciplinaClick = (disciplina: string) => {
    setSelectedDisciplina(disciplina)
  };

  const handleConfirm = async () => {
    if(selectedDisciplina === null || nota === null) {
      alert('Por favor, selecione uma disciplina e insira uma nota.');
      return
    }

    try {
      await axios.post('http://localhost:3333/resultados', {
        bimestre,
        disciplina: selectedDisciplina,
        nota: Number(nota),
      })
        onClose();
    } catch (error) {
      console.error('Erro ao enviar dados para o banco:', error);
      alert('Erro ao enviar dados para o banco. Por favor, tente novamente.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal" {...props}>
        <div className="modal-header">
          <h2>{bimestreNome}</h2>
            <button className="close-button" onClick={onClose}>
              Fechar
            </button>
        </div>
        <div className="modal-content">
          <div className="disciplinas">
            {disciplinas.map((disciplina) => (
              <button
                key={disciplina}
                className={selectedDisciplina === disciplina ? 'selected' : ''}
                  onClick={() => handleDisciplinaClick(disciplina)}
              >
                {disciplina}
              </button>
            ))}
          </div>
          <div className="nota-input">
            <label>Nota:</label>
            <input
              type="number"
              value={nota || ''}
              onChange={(e) => setNota(e.target.value)}
            />
          </div>
            <button onClick={handleConfirm}>Confirmar</button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;