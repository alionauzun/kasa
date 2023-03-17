// Dans ce fichier, je définis les routes de l'application et je crée le composant App qui est le composant racine--//

//----importation des composants depuis les répertoires pages et components----//
import Home from './pages/Home';
import About from './pages/About';
import Error from './components/Error';
import Accommodations from './pages/Accommodations';

//----importation des librairies de React Router pour définir les routes de l'application----//
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//----définition de l'objet router qui contient les routes de l'application----//
const router = createBrowserRouter([
	{
		index : true,
		element: <Home />
	},
	{
		path: "/accomodation/:id",
		element: <Accommodations />
	},
	{
		path: '/about',
		element: <About />
	},
	{
        //la route par défaut qui est affichée lorsque l'URL ne correspond à aucune route définie
		path: "*",
		element: <Error />
	},
]);

//"RouterProvider" est un composant de React Router qui permet de rendre accessibles les routes à tous les composants de l'application
export default function App() {
	return (
		<>
			<RouterProvider router={router}/>
		</>
	);
}
