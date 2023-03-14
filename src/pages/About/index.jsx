
import Header from "../../components/Header";
import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import aboutDatas from '../../data/aboutData';
import Footer from '../../components/Footer';
import PropTypes from 'prop-types';
import styled from "styled-components";

export default function About({id, title, content}) {

	
	return (
		<StyledAbout>
			<Header />
			<Banner />
			<StyledMain>
				{aboutDatas.map(data => {
					return (
						<div key={data.id} className="about_main_collapse">
							<Collapse title={data.title} content={data.content} />
						</div>
					)}
					)}
			</StyledMain>
			<Footer />
		</StyledAbout>
	)
}
//je définis les types de props que je souhaite recevoir pour le composant About
About.defaultProps = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
}

const StyledMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
`

const StyledAbout = styled.div`
    .about_main {
        font-family: 'Montserrat', sans-serif;
    }
    .about_main_collapse {
        width: 85%;
    @media screen and (max-width: 550px){
        width: 95%;
    }
    }
    @media screen and (max-width: 550px){
        margin: 20px auto;
    }
`