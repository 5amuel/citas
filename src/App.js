import React, {Fragment, useState} from 'react';
import Formulario from './components/Formulario'
import Cita from './components/Cita'


function App() {
  //array de citas
  const [citas, guardarCitas] = useState([]);
 //Funcion que toma la cita actual y agrega la nueva
  const crearCita = cita => {
    guardarCitas([...citas, cita])
    console.log(cita)
  }
  //Funcion para eliminar cita por id
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas)
  }
  const titulo = citas.length === 0 ? 'No Hay  citas' : 'Administra tus citas'

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita =>(
              <Cita 
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
