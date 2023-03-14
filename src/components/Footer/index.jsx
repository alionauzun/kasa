import styled from 'styled-components'
import logo from '../../assets/logo_white.svg'
//import colors from '../../utils/style/colors'


export default function Footer() {
    return (
        <FooterContainer>
            <img src = {logo} alt = "Kasa - agence de location d'appartements entre particuliers" />
            <p>© 2020 Kasa. All rights reserved</p>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #000000;
    color: white;
    width: 100%;
    height: 209px;
    margin-top: 100px;
    img {
        width: 122px;
        height: 150px;
        color: white;
        margin-top: 60px;

        @media (max-width: 768px) {
            width: 100px;
            height: 120px;
        }        
    }
    p{
        font-family: 'Montserrat', sans-serif;
        font-size: 24px;
        font-weight: 300;
        margin-bottom: 30px;
        @media (max-width: 768px) {
            font-size: 18px;
        }
    }
`