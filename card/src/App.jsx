import './App.css'
import Image from './components/Image'
import Rating from './components/Rating'
import styled from 'styled-components';

const Frame = styled.div`
  border: 1px solid white;
  border-radius: 3px;
`

const Artist = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 20px;
`

const Img = styled.div`
  display: flex;
  flex-direction: row-reverse;
  border: 1px solid white;
  border-radius: 3px;
  padding: 0px 30px
`

const Star = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid white;
  border-radius: 3px;
  padding: 0px 30px

`

const SecondTitle = styled.h3`
  font-family: "Times New Roman", Times, serif;
`

const ArtistTitle = styled.h2`
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
  font-size: 40px
`

function App() {
  return (
    <Frame>
      <Img>
        <Artist>
          <ArtistTitle>Lady Gaga</ArtistTitle>
          <SecondTitle>Téléphone (2010)</SecondTitle>
        </Artist>
        <Image />
      </Img>
      <Star>
        <SecondTitle>Rate this album</SecondTitle>
        <Rating />
      </Star>
    </Frame>
  )
}

export default App
