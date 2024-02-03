import { useState } from 'react'
import './Form.css'

export default function Form({onFormSubmit}){

    let [weight, setWeight] = useState(0)
    let [height, setHeight] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault();

        if (weight != 0 && height != 0) {
            onFormSubmit({ weight, height });
        } else {
            alert('Preencha valores válidos para peso e altura');
        }
    };

    return(
        <section className="main-content rounded p-5 mt-5 shadow">
        <form onSubmit={handleSubmit} >
            <div className="container">
            <div className="row">
            <div className="col-12 mb-3">
                <div  className="label-top">
                <img className="icone" src={'/lose-weight.png'} alt="Peso icone" />
                <label htmlFor="peso" className="form-label">Digite seu Peso (kg)</label>
                </div>
                <input type="number" value={weight} className="form-control" placeholder="Peso" aria-label="Peso" onChange={evento => setWeight(evento.target.value)} required/>
            </div>

            <div className="col-12 mb-3">
                <div className="label-top">
                <img className="icone" src={'/altura.png'} alt="Altura icone" />
                <label htmlFor="altura" className="form-label">Digite sua Altura (cm)</label>
                </div>
                <input type="number" value={height} id="altura" className="form-control" placeholder="Altura" aria-label="Altura"  onChange={evento => setHeight(evento.target.value)} required/>
            </div>

            <div className="col-12 mt-3">
                <button type="submit" className="btn btn-success d-flex">Calcular</button>
            </div>
            </div>
            </div>


        </form>
        </section>
    )
}