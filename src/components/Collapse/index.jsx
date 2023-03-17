
import arrow from '../../assets/arrow.png';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import propsType from 'prop-types';

//la props index correspond à l'index de la section dans le tableau de sections
export default function Collapse({title, content,index}) {

    const [toggle, setToggle] = useState(false);

//j'ajoute un nouvel état height qui stockera la hauteur de la section, initialisé à 0
    const [height, setHeight] = useState(0);
    const contentRef = useRef(null);//je crée une référence pour le contenu de la section

//useEffect mettra à jour la hauteur de la section en fonction de l'état du state toggle 
    useEffect(() => {
        setHeight(toggle ? contentRef.current.scrollHeight : 0);//si toggle est true, la hauteur de la section sera égale à la hauteur du contenu, sinon elle sera égale à 0
    }, [toggle])

//handleToggle va permettre de changer l'état du state toggle
    const handleToggle = () => {
        setToggle(!toggle);
    }
    return (
        <>
            <StyledCollapse index={index} height={height}>
                <h3 onClick={handleToggle} >
                    {title}
                    <img 
                        className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'} 
                        src={arrow} 
                        alt="show content" 
                    />
                </h3>

                <div 
                ref={contentRef}
                className={toggle ? 'collapse_content' : 'collapse_content_hidden'}>
                    {Array.isArray(content) ? content.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    }) : content
                    }
                </div> 

            </StyledCollapse>
        </>
    )
}
//je définis les props par défaut du composant Collapse 
Collapse.defaultProps = {
    title: propsType.string.isRequired,
    content: propsType.string.isRequired,
    index: propsType.number.isRequired
}


const StyledCollapse = styled.div`
    background-color: ${colors.secondary};
    border-radius: 10px;;
    margin-bottom: ${({height}) => height}px;
    margin: 20px 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;

    @media (max-width: 768px) {
        font-size: 14px;
        margin: 10px 0;
    }

    
    h3{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 15px;
        color: ${colors.primary};
        font-weight: 300;
        cursor: pointer;
        margin: 0;
    }
    .arrow {
        width: 20px;
        transition: all 0.3s ease;
    }
    .arrow_up {
        transform: rotate(0deg);
    }
    .arrow_down {
        transform: rotate(180deg);
    }
    .collapse_content {
        padding: 20px 15px;
        background-color: ${colors.tertiary};
        border-radius: 0 0 10px 10px;
        visibility: visible;
        font-weight: 300;
        letter-spacing: 0.4px;
        color: ${colors.secondary};
        width: auto;
    }
    .collapse_content_hidden {
        visibility: hidden;
        opacity: 0;
        height: 0;
        p {
            margin-top: 0;
        }
    }
`
