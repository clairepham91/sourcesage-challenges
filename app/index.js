import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const container = document.createElement('section');
document.body.appendChild(container);
// class Root, which returns App
function Root() {
  return (
    <App />
  );
}

ReactDOM.render(<Root />, container);

