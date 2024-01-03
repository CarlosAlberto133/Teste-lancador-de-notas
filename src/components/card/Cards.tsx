import './Cards.css'
import notaVerde from '../../assets/notaVerde.svg'


interface CardsProps {
    disciplina: string,
    dataDeLancamento: string,
    nota: string
}

export default function Cards({ disciplina, dataDeLancamento, nota } : CardsProps ) {
    const getTextColor = () => {
        const numericNota = parseFloat(nota)

        if(numericNota >= 0 && numericNota <= 5.9) {
            return 'redColor'
        } else if(numericNota >= 6 && numericNota <= 7.9) {
            return 'yellowColor'
        } else if(numericNota >= 8 && numericNota <= 10) {
            return 'greenColor'
        }
        return ''
    }

    return (
        <div className="cardContainer">
            <div>
                <label className="label">{ disciplina }</label>
            </div>
            <span className='dataDeLançamento'>{ dataDeLancamento }</span>
            <div className='marcacao'>
                <div>
                    <img className='notaImg' src={notaVerde} alt='nota' />
                </div>
                <span className={`nota ${getTextColor()}`}>Nota: {nota}</span>
            </div>
            
        </div>
    )
}