import './cita.css';
function Cita({ cita, index, eliminarCita }) {
  return (
    <div className="cita">
      <p class= "textoCita">Mascota: <span>{cita.mascota}</span></p>
      <p class= "textoCita">Dueño: <span>{cita.propietario}</span></p>
      <p class= "textoCita">Fecha: <span>{cita.fecha}</span></p>
      <p class= "textoCita">Hora: <span>{cita.hora}</span></p>
      <p class= "textoCita">Sintomas: <span>{cita.sintomas}</span></p>
      <button className="buttonEliminarCitas" onClick={() => eliminarCita(index)}>Eliminar ×</button>
    </div>
  );
}

export default Cita;