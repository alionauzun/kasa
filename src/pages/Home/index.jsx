import styled from 'styled-components'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Gallery from '../../components//Gallery'
import Footer from '../../components/Footer'

function Home() {
	return (
		<StyleSheet>
			<Header />
      <Banner />
			<Gallery />
			<Footer />
		</StyleSheet>
	)
}
export default Home

const StyleSheet = styled.div`
  font-family: 'Montserrat', sans-serif;
`