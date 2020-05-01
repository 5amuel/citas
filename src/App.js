import React, {Fragment, useState} from 'react';
import Formulario from './components/Formulario'
import Cita from './components/Cita'


function App() {

  //array de citas
  const [citas, guardarCitas] = useState([]);

  const crearCita = cita => {
    guardarCitas([...citas, cita])
    console.log(cita)
  }

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
            <h2>Gestiona las citas</h2>
            {citas.map(cita =>(
              <Cita 
                key={cita.id}
                cita={cita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
