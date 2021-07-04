import logo from './logo.svg';
import './App.css';
import Table from './components/shared/Table';

function App() {
  console.log('Primer aplicación react');
  //Todos los componentes deber estar encapsulados en un único tag
  //Se puede usar la etiqueta <React.Fragment> que no tiene ningún tipo de comportamiento
  return (
    <div className="App">
      {/*       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>Bienvenido</h1>
      <p>A la diplomatura en React</p>
      <Table></Table>
    </div>
  );
}

export default App;
