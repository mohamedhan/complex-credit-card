import React  from 'react'
import Chip from '../component/chip.jpg'
import Visa from '../component/visa-card.jpg'




const Card = (props) => {
    return (
        <div className="card">
            <h1 className="card-title">Company name</h1>
            <img className="chip-image" src={Chip} />
            <div className="card-critere">
                <div className="card-critere-left">
                    <h3 class="card-number">{String(props.number).padEnd(19, '*')}</h3>
                    <div className="sect-valid">
                        <p className="number">5422</p>
                        <div className="valid-card">
                            <p className="valid-thru">Valid<br />thru</p>
                            <div className="valid">
                                <p className="valid-thru">Moth/Year</p>
                                <p className="date-exp">{(props.date).padEnd(5,'*')}</p>
                            </div>
                        </div>
                    </div>
                    <p className="card-holder">{(props.name).toUpperCase()}</p>
                </div>
                <img className="visa-image" src={Visa}/>
            </div>
        </div>
    )
}

export default Card

