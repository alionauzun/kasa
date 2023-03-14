//--dans ce fichier j'importe le composant principal qui est le composant App et je l'injecte dans le DOM--//

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App  />
	</React.StrictMode>
);


