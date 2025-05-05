import Cita from '../cita/cita';

function ListaCitas({ citas, eliminarCita }) {
  return (
    <div className="one-half column">
      <h2>Administra tus citas</h2>
      {citas.map((cita, i) => (
        <Cita key={i} index={i} cita={cita} eliminarCita={eliminarCita} />
      ))}
    </div>
  );
}

export default ListaCitas;