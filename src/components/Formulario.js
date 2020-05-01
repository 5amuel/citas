import React, {Fragment, useState} from 'react';

const Formulario = () => {

    const[cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    const[error, actualizarError] = useState(false)

    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }
    const { mascota, propietario, fecha, hora, sintomas} = cita
    const submitCita = e => {
        e.preventDefault();
        console.log(mascota);

        //Validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            actualizarError(true);
            return;
        }
        //Asignar un ID

        //Crear la cita

        //Reiniciar el form
    }
    return ( 
        <Fragment>
            <h2>Crear cita</h2>
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null} 
            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre Dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre dueño de la Mascota"
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar cita</button>
            </form>
        </Fragment>
     );
}
 
export default Formulario;