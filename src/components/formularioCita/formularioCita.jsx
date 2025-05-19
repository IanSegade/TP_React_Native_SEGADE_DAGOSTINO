import '../formularioCita/formularioCita.css';
import { useState } from 'react';


function FormularioCita({ agregarCita }) {
  const [formData, setFormData] = useState({
    mascota: '', propietario: '', fecha: '', hora: '', sintomas: ''
  });

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const confirmar = window.confirm("¿Deseas agregar esta cita?"); if (!confirmar) return;
    agregarCita(formData);
    setFormData({ mascota: '', propietario: '', fecha: '', hora: '', sintomas: '' });
  };

  return (
    <div class="one-half column">
      <h2>Crear mi Cita</h2>
      <form class = 'formulario' onSubmit={handleSubmit}>
        <label>Nombre Mascota</label>
        <input type="text" name="mascota" class="inputform" onChange={handleChange} value={formData.mascota} />

        <label>Nombre Dueño</label>
        <input type="text" name="propietario" class="inputform" onChange={handleChange} value={formData.propietario} />

        <label>Fecha</label>
        <input type="date" name="fecha" class="inputform" onChange={handleChange} value={formData.fecha} />

        <label>Hora</label>
        <input type="time" name="hora" class="inputform" onChange={handleChange} value={formData.hora} />

        <label>Sintomas</label>
        <textarea name="sintomas" className="inputform" onChange={handleChange} value={formData.sintomas} />

        <button type="submit" class="button-form">Agregar Cita</button>
      </form>
    </div>
  );
}

export default FormularioCita;