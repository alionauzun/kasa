//j'importe React et ReactDOM qui permettent de créer des composants et de les afficher dans le DOM
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
//React.StrictMode est un mode de développement de React qui aide à identifier les problèmes courants liés à la programmation en React
root.render(
	<React.StrictMode>
		<App  />
	</React.StrictMode>
);


