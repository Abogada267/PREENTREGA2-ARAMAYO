import { Usuario } from "./Usuario.jsx";

const Tutores = () => {
  return (
    <div>
      <h3>ESTUDIO JURIDICO MALVINA ARAMAYO</h3>
      <ul>
        <Usuario nombre="Malvina" rol="Estudiante" edad={28} />
        <Usuario nombre="Graciela" rol="Estudiante" edad={29} />
        <Usuario nombre="Sara" rol="Estudiante" edad={31} />
      </ul>
    </div>
  );
};

export default Tutores

