
import Header from "../../components/Header";
import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import Footer from '../../components/Footer';
import styled from "styled-components";

export default function About() {

	const aboutDatas = [
		{
			"id": "1",
			"title": "Fiabilité",
			"content": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
		},
		{
			"id": "2",
			"title": "Respect",
			"content": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.."
		},
		{
			"id": "3",
			"title": "Service",
			"content": "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
		},
		{
			"id": "4",
			"title": "Sécurité",
			"content": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
		}
	]

	return (
		<StyledAbout>
			<Header />
			<Banner />
			<StyledMain>
				{aboutDatas.map(data => {
					return (
						<div key={data.id} className="about_main_collapse">
							<Collapse title={data.title} content={data.content} />
						</div>
					)}
				)}
			</StyledMain>
			<Footer />
		</StyledAbout>
	)
}

const StyledMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
`

const StyledAbout = styled.div`
    .about_main {
        font-family: 'Montserrat', sans-serif;
    }
    .about_main_collapse {
        width: 85%;
    @media screen and (max-width: 550px){
        width: 95%;
    }
    }
    @media screen and (max-width: 550px){
        margin: 20px auto;
    }
`