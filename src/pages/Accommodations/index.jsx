//import des composants
import { useEffect, useState } from "react"
import { useParams, Navigate } from "react-router-dom";
import datas from '../../data/data'
import Header from "../../components/Header";
import Slider from "../../components/Carousel"
import Footer from "../../components/Footer";
import Collapse from '../../components/Collapse';
import greyStar from '../../assets/grey_star.png';
import redStar from '../../assets/red_star.png';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

//je crée le composant Accommodation qui va afficher les informations d'un logement en fonction de l'id de celui-ci
export default function Accommodation() {
	const [imageSlider, setImageSlider] = useState([]);
    //je récupère l'id de l'accommodation dans l'url
	const idAccommodation = useParams('id').id;
	const dataCurrentAccommodation = datas.filter(data => data.id === idAccommodation);
	
    //je récupère les images du logement dans le state imageSlider
    useEffect(() => {
		setImageSlider(dataCurrentAccommodation[0].pictures);
    }, [dataCurrentAccommodation]
    )

    //je redirige l'utilisateur vers la page d'erreur 404 si l'id de l'accommodation n'existe pas
    if(dataCurrentAccommodation.length === 0) {
        return <Navigate to="*" />
    }

    //----je récupère les informations du logement----//
	const name = dataCurrentAccommodation[0].host.name.split(' '); 
	const rating = dataCurrentAccommodation[0].rating;
	const description  = dataCurrentAccommodation[0].description;
	const equipments = dataCurrentAccommodation[0].equipments;

	return (
		<>
			<Header/>
			<Slider imageSlider={imageSlider}/>
            <StyledMain>
				<AccomodationContent>
					<ContentInfos>
						<h1>{dataCurrentAccommodation[0].title}</h1>
						<p>{dataCurrentAccommodation[0].location}</p>
						<div>
							{dataCurrentAccommodation[0].tags.map((tag, index) => {
								return (
									<button key={index}>{tag}</button>
								)
							})}
						</div>
					</ContentInfos>
					<ContentHost>
						<HostName>
							<div>
								<span>{name[0]}</span>
								<span>{name[1]}</span>
							</div>
							<img src={dataCurrentAccommodation[0].host.picture} alt="host of this accomodation" />
						</HostName>
							
						<HostStars>
							{[...Array(5)].map((star, index) => {
								const ratingValue = index + 1;
								return (
									<img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />
								)
							})}
						</HostStars>
					</ContentHost>
				</AccomodationContent>

				<AccomodationCollapse>
					<div>
						<Collapse title={'Description'} content={description} />	
					</div>
					<div>
						<Collapse title={'Équipements'} content={equipments} />
					</div>	
				</AccomodationCollapse>
			</StyledMain>
			<Footer/>
		</>
	)
}


const StyledMain = styled.main`
    width: 85%;
    margin: 0 auto;
    font-family: 'Montserrat', sans-serif;

    @media (max-width: 768px) {
        width: 95%;
    }
`

const AccomodationContent = styled.section`
    display: flex;  
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: 1200px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`


const ContentInfos = styled.div`
    width: 70%;
    @media (max-width: 768px) {
        width: 100%;
    }
    h1 {
        font-size: 28px;
        font-weight: 400;
        color: ${colors.secondary};
        margin-bottom: 10px;

        @media (max-width: 768px) {
            font-size: 20px;
            font-weight: 300;
            letter-spacing: 0.5px;
            line-height: 1.5;
        }
    }
    p {
        font-size: 14px;
        font-weight: 400;
        color: ${colors.secondary};
        margin-bottom: 20px;

        @media (max-width: 768px) {
            font-size: 15px;
            font-weight: 300;
            margin-bottom: 10px;
        }
    }
    div {
        display: flex;
        flex-wrap: wrap;
        button {
            background-color: ${colors.secondary};
            border: none;
            border-radius: 10px;
            padding: 5px 15px;
            margin-right: 10px;
            margin-bottom: 10px;
            font-size: 13px;  
            font-weight: 300;
            color:${colors.primary};

            @media (max-width: 768px) {
                border-radius: 5px;
            }
        }
    }
`

const ContentHost = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: row-reverse;
        justify-content: space-between;
        width: 100%;
        margin-top: 10px;
    }
`

const HostName = styled.div`
    display: flex;
    align-items: center;
    div {
        display: flex;
        flex-direction: column;
        span {
            font-size: 14px;
            font-weight: 300;
            color: ${colors.secondary};
            margin-bottom: 5px;
        }
    }
    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-left: 10px;
    }
`

const HostStars = styled.div`
    display: flex;
    img {
        width: 20px;
        height: 20px;
        margin-right: 5px;
        margin-top: 15px;

        @media (max-width: 768px) {
            margin-top: 0;
            width: 16px;
            height: 16px;
        }
    }
`

const AccomodationCollapse = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px 0;

    div {
        width: 95%;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        div {
            width: 100%;
        }
    }
`
