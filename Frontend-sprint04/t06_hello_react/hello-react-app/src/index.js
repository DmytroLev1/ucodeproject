import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


function HelloReact() {
  return <h2>Hello React!</h2>;
}
ReactDOM.render(<HelloReact />, document.getElementById('root'));

reportWebVitals();
