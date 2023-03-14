import datas from '../../data/data'
import Card from '../Card'
import styled from 'styled-components' 
import colors from '../../utils/style/colors'

//Ce composant affiche la liste des logements en utilisant le composant Card pour chaque logement
export default function Gallery() {
    return (
        <StyledMain>
            {datas.map(data => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </StyledMain>
    )
}

const StyledMain = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    width: 85%;
    margin: 40px auto;
    background-color: ${colors.tertiary};
    padding: 20px 0;
    border-radius: 20px;

    @media (max-width: 768px) {
        width: 100%;
        background-color: ${colors.primary};
        margin-top: 0;
    }
`
