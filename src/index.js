import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
Podríamos considerar cliente y servidor en una aplicacion
cliente: react
servidor: node
También se puede considerar cliente al browser porque es el cliente del sistema
Siempre comunicados por http

BROWSER <-http-> CLIENTE(React) <-http-> SERVIDOR(Node) <...> DB

React es un lenguaje de programación que se va a ejecutar en un servidor y también una parte se ejecuta en el browser
Node también se ejecuta pero en otro servidor

*/
