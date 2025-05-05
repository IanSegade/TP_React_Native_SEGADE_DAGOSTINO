// App.jsx
import { useState } from 'react';
import FormularioCita from './components/formularioCita/formularioCita';
import ListaCitas from './components/listacitas/listaCitas.jsx';
import './App.css';

function App() {
  const [citas, setCitas] = useState([]); // Estado: lista de citas

  // Agrega una nueva cita
  const agregarCita = cita => setCitas([...citas, cita]);

  // Elimina una cita por índice
  const eliminarCita = index => {
    const nuevasCitas = [...citas];
    nuevasCitas.splice(index, 1);
    setCitas(nuevasCitas);
  };

  return (
    <div className="container">
      <h1>ADMINISTRADOR DE PACIENTES</h1>

      <div className="row">
        {/* Columna con formulario para crear citas */}
        <FormularioCita agregarCita={agregarCita} />

        {/* Columna con la lista de citas */}
        <ListaCitas citas={citas} eliminarCita={eliminarCita} />
      </div>
    </div>
  );
}

export default App;

