//----ce fichier est le composant principal de l'application----//

//----importation des composants----//
import Home from './pages/Home';
import About from './pages/About';
import Error from './components/Error';
import Accommodations from './pages/Accommodations';

//----importation des librairies----//
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//----définition des routes----//
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
        //ici j'ai mis un wildcard pour que toutes les autres routes soient redirigées vers la page d'erreur
		path: "*",
		element: <Error />
	},
]);

//----définition du composant principal----//
export default function App() {
	return (
		<>
			<RouterProvider router={router}/>
		</>
	);
}
