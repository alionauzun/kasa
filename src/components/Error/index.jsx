import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "../../utils/style/colors";
import Header from "../../components/Header";

export default function Error() {
      return (
            <>
                  <Header />
                  <StyledError>
                  <h1>404</h1>
                  <p>Oups! La page que vous demandez n'existe pas.</p>
                  <StyledLink to="/">Retourner sur la page d’accueil</StyledLink>
                  </StyledError>
            </>
      );
}

const StyledError = styled.div`
      font-family: "Montserrat", sans-serif;
      width: 85%;
      margin: auto;
      display: flex;
      flex-direction: column;
      align-items: center;

      background-color: ${colors.primary};
      color: ${colors.white};
      h1 {
            font-size: 200px;
            font-weight: 900;
            color: ${colors.secondary};
            margin-bottom: 10px;
      }
      p {
            font-size: 22px;
            font-weight: 400;
            color: ${colors.secondary};
            margin-bottom: 100px;
            @media (max-width: 768px) {
                  font-weight: 300;
                  display: flex;
                  align-content: center;
                  width: 80%;
                  line-height: 1.5;

      }
`
const StyledLink = styled(Link)`
      text-decoration: none;
      color: ${colors.secondary};
      border-bottom: 1.5px solid ${colors.secondary};
      font-size: 14px;
      margin: 20px;

      &:hover {
            border-bottom: 1.5px solid transparent;
      }

      @media (max-width: 768px) {
            font-size: 17px;
      }
`
