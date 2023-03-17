//----Banner component----//

import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import imageHome from '../../assets/IMG-01.20.22.webp';
import aboutImage from '../../assets/kalen-emsley-Bkci_8qcdvQ-unsplas.webp';

//je crée le composant Banner qui va afficher le texte sur la page home et ne rien afficher sur la page about
export default function Banner() {
    //le hook "useState" pour définir un état "aboutPage"
	const [aboutPage, setAboutPage] = useState(false);
	const location = useLocation();

    //le hook "useEffect" pour définir l'état "aboutPage" en fonction de la route actuelle de l'utilisateur
	useEffect(() => {
		if(location.pathname === '/about'){
			setAboutPage(true)
		};
	}, [location.pathname])
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



