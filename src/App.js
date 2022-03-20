import styled from 'styled-components'


const Page = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;400&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inspiration&display=swap');
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;

  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;

`

const TitleImg = styled.img`
  padding-top: 40px;
  padding-bottom:20px;
  width: 100%;
  height: 100%;
  object-fit: scale-down;  
`

const GameImg = styled.img`
  padding: 10px;
  width: 20%;
  // height: 30%;
  object-fit: scale-down;  
`


const Header = styled.header`
width:100%;
background-color:brown;
display: flex;


justify-content: center;
`

const Body = styled.body`
  padding:20px;
  font-size: large;
  font-family: 'Josefin Sans', sans-serif;
`

function App() {
  return (
    <Page className="App">
      <Header className="App-header">
        <TitleImg src="./funkylogo.png" alt='logo'></TitleImg>
      </Header>
      <Body>
        <h1>
          Who are we?
        </h1>
        <p>
          We are Funky Symbol
        </p>
        <p>
          You want more info?
        </p>
        <p>
          We are a family who like to make games. Not necessarily good ones. But games nonetheless
        </p>
        <h1>
          Games
        </h1>
        <h2>
          Wordo
        </h2>
        <span>
        <GameImg src="./standard-ss.jpeg" alt="standard"></GameImg>  
        <GameImg src="./master-ss.jpeg" alt="standard"></GameImg>  
        <GameImg src="./options-ss.jpeg" alt="standard"></GameImg>  
        <GameImg src="./stats-ss.jpeg" alt="standard"></GameImg>  
        </span>
        <p>
          Classis word game. Try to figure out the hidden word. Guess a word and see how many correct letters you have, either in the right or the wrong place
        </p>
        <p>
          Multiple modes available - either showing which letters are correct or, for a harder challenge, only how many you've got right
        </p>
        <p>
          Custom modes also available to create your own game
        </p>
      </Body>
    </Page>
  );
}

export default App;
