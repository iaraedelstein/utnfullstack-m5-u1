import Row from './Row';
function Table() {
  return (
    <table>
      <thead>
        <th>Nombre</th>
      </thead>
      <tbody>
        {/* Esto es para mostrar que no se puede mandar un div dentro de una table user <> */}
        <Row></Row>
      </tbody>
    </table>
  );
}

export default Table;
