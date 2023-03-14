//j'importe le composant Link de react-router-dom pour pouvoir créer un lien vers une autre page
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components' 
import colors from '../../utils/style/colors.js'

//Ce composant récupère 3 props : id, title et cover 
//id est utilisé pour créer le lien vers la page de logement
export default function Card({id, title, cover}) {
    
    return (
        <StyledLink to={`/accomodation/${id}`} className="gallery_card">
			<img src={cover} alt={title} />
			<h3>{title}</h3>	
		</StyledLink>
	)
}

//Je définis les types de props que je souhaite recevoir pour le composant Card
Card.defaultProps = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
}


const StyledLink = styled(Link)`
    justify-content: center;
    text-decoration: none;
    width: 27%;
    height: 340px;
    margin: 30px;

    background: rgb(142,80,80);
    background: linear-gradient(360deg, rgba(142,80,80,1) 0%, rgba(232,93,93,1) 30%, rgba(255,96,96,1) 45%);
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
    transition: all 0.3s ease-in-out;
    
    &:hover {
        transform: scale(1.05);
    }
    @media (max-width: 992px) {
        width: 94%;
        height: 300px;
        margin: 14px 0;
    }

    img {
        width: 100%;
        height: 75%;
        object-fit: cover;
        border-radius: 10px 10px 0 0;

        @media (max-width: 768px) {
            height: 72%;
        }
    }

    h3 {
        margin-top: 5px;
        padding-left: 15px;
        font-size: 14px;
        font-weight: 300;
        width: 45%;
        text-align: left;
        color: ${colors.primary};

        @media (max-width: 992px) {
            font-size: 18px;
            width: 50%;
            line-height: 1.3;
        }
    }
`