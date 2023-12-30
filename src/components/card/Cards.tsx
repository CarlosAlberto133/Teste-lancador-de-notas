import './Cards.css'
import Chart from '../../assets/Chart.svg'


interface CardsProps {
    disciplina: string,
    dataDeLançamento: string,
    nota: string
}

export default function Cards({ disciplina, dataDeLançamento, nota } : CardsProps ) {
    return (
        <div className="cardContainer">
            <div>
                <label className="label">{ disciplina }</label>
            </div>
            <span className='dataDeLançamento'>{ dataDeLançamento }</span>
            <div className='marcacao'>
                <div>
                    <img className='notaImg' src={Chart} alt='nota' />
                </div>
                <span>Nota: { nota }</span>
            </div>
            
        </div>
    )
}