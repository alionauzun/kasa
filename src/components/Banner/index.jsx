//----Banner component----//

import { useLocation } from 'react-router-dom';//récupérer l'url de la page sur laquelle je suis 
import { useEffect, useState } from 'react';//useEffect pour pouvoir exécuter une fonction au chargement de la page et useState pour créer un state
import styled from 'styled-components';
import imageHome from '../../assets/IMG-01.20.22.webp';
import aboutImage from '../../assets/kalen-emsley-Bkci_8qcdvQ-unsplas.webp';

//je crée le composant Banner qui va afficher le texte sur la page home et ne rien afficher sur la page about
export default function Banner() {
    //setAboutPage est un state qui va permettre de savoir si je suis sur la page about ou non
	const [aboutPage, setAboutPage] = useState(false);

    //useLocation est une fonction qui va me permettre de récupérer l'url de la page sur laquelle je suis
	const location = useLocation();


    //----useEffect va me permettre d'exécuter une fonction au chargement de la page----//
	useEffect(() => {
		if(location.pathname === '/about'){
			setAboutPage(true)
		};
		// eslint-disable-next-line 
	}, [])
    return (
<StyledBanner>
        <section className={aboutPage ? 'banner_about' : 'banner'}>
			{!aboutPage && <p>Chez vous, partout et ailleurs</p>}
		</section>
</StyledBanner>
    )
}

const StyledBanner = styled.div`
    .banner{
    background-image: url(${imageHome});
    background-size: cover;
    background-position: center;
    box-shadow: inset 5em 20em rgba(0,0,0,0.3);
    height: 200px;
    display: flex;
    width: 85%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    border-radius: 25px;

    @media (max-width: 768px) {
        width: 95%;
        height: 120px;
        border-radius: 10px;
        justify-content: flex-start;
    }
}
    p{
        font-family: 'Montserrat', sans-serif;
        font-size: 43px;
        color: white;
        text-shadow: 0 0 10px rgba(0,0,0,0.5);

        @media (max-width: 768px) {
            font-size: 28px;
            font-weight: 300;
            width: 70%;
            padding-left: 20px;
        }
    }
    .banner_about{
        background-image: url(${aboutImage});
        background-size: cover;
        background-position: center;
        box-shadow: inset 5em 20em rgba(0,0,0,0.3);
        height: 200px;
        display: flex;
        width: 85%;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
        border-radius: 25px;
        margin-bottom: 20px;

        @media (max-width: 768px) {
            width: 95%;
            height: 230px;
            border-radius: 10px;
        }
        p{
            display: none;
        }
    }
`



