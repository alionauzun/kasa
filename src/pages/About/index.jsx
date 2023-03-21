
import Header from "../../components/Header";
import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import aboutDatas from '../../data/aboutData';
import Footer from '../../components/Footer';
import styled from "styled-components";

export default function About() {

	
	return (
		<>
		<StyledAbout>
			<Header />
			<Banner />
			<StyledMain>
				{aboutDatas.map(data => {
					return (
						//Les clés aident React à identifier quels éléments d’une liste ont changé, ont été ajoutés ou supprimés  
						<div key={data.id} className="about_main_collapse">
							<Collapse title={data.title} content={data.content} />
						</div>
					)}
					)}
			</StyledMain>
			<Footer />
		</StyledAbout>
		</>
	)
}

const StyledMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
`

const StyledAbout = styled.div`
    font-family: 'Montserrat', sans-serif;
    .about_main_collapse {
        width: 70%;
    @media screen and (max-width: 550px){
        width: 95%;
    }
    }
    @media screen and (max-width: 550px){
        margin: 20px auto;
    }
`