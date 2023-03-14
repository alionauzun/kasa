import styled from 'styled-components'    
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.svg'
import colors from '../../utils/style/colors.js'

export default function Header() {
      return (
            <StyledHeader>
                  <img src= {Logo} alt="logo" />
                  <nav>
                        <StyledLink to="/">Accueil</StyledLink>
                        <StyledLink to="/about">A Propos</StyledLink>
                  </nav>
            </StyledHeader>
      );
}

const StyledHeader = styled.header`
      font-family: 'Montserrat', sans-serif;
      width: 85%;
      margin: auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      @media (max-width: 768px) {
            width: 95%;
      }
      img {
            width: 150px;
            height: 150px;

            @media (max-width: 768px) {
                  width: 130px;
                  height: 130px;
            }
      }
      nav {
            display: flex;
            flex-direction: row;
      }
`
const StyledLink = styled(Link)`
      text-decoration: none;
      color: ${colors.secondary};
      font-size: 18px;
      margin: 20px;
      outline: none;
      border-bottom: 1.5px solid transparent;

      &:hover {
            border-bottom: 1.5px solid ${colors.secondary};
      }

      @media (max-width: 768px) {
            margin: 10px;
            text-transform: uppercase;
            font-size: 14px;
      }
`
