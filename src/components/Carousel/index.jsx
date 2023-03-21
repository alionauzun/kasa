import ArrowRight from '../../assets/chevron_carousel_right.png'
import ArrowLeft from '../../assets/chevron_carousel_left.png'
import { useState } from 'react'

import styled from 'styled-components'

//je crée le composant Slider qui va afficher les images du logement en fonction de l'index du state currentIndex
export default function Slider({imageSlider}) {

    const [currentIndex, setCurrentIndex] = useState(0)

//je crée une fonction qui va incrémenter l'index du state currentIndex et qui va remettre l'index à 0 si l'index est égal à la longueur du tableau imageSlider 
    const nextSlide = () => {
        setCurrentIndex(currentIndex + 1)
        if(currentIndex === imageSlider.length - 1)
            setCurrentIndex(0)
    }
//fonction qui va décrémenter 
    const prevSlide = () => {
        setCurrentIndex(currentIndex - 1)
        if(currentIndex === 0)
            setCurrentIndex(imageSlider.length - 1)
    }

    return (
        <Carousel style={{backgroundImage : `url(${imageSlider[currentIndex]})`}} className='carousel'>
            {imageSlider.length > 1 && 
                <>
                    <img 
                        className='carousel_arrow_right' 
                        src={ArrowRight} 
                        alt="show next slider" 
                        onClick={nextSlide}
                        />
                    <img 
                        className='carousel_arrow_left' 
                        src={ArrowLeft} 
                        alt="show previous slider" 
                        onClick={prevSlide}
                        />
                    <p>{currentIndex + 1} / {imageSlider.length}</p>
                </>
            } 
            </Carousel>
    )
}

const Carousel = styled.section`
    position: relative;
    width: 85%;
    border-radius: 20px;
    height: 400px;
    margin : 0 auto;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    @media (max-width: 768px) {
        width: 95%;
        height: 300px;
    }

    img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        height: 13%;
        cursor: pointer;
        &:hover {
            opacity: 0.5;
        }
        @media (max-width: 768px) {
            height: 6%;
        }
    }

    .carousel_arrow_right {
        right: 25px;
    }
    .carousel_arrow_left {
        left: 25px;
    }

    p {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 10px;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        @media (max-width: 768px) {
            position: absolute;
            bottom: -5%;
            right: 42%;
            background-color: transparent;
        }
    }
`

