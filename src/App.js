import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './Main'

const Page = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;400&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inspiration&display=swap');
  
`

const Header = styled.header`
  width:100%;
  background-color:brown;
  display: flex;
  justify-content: center;
`

const TitleImg = styled.img`
  // padding-top: 20px;
  // padding-bottom:10px;
  width: 100%;
  height: 100%;
  object-fit: scale-down;  
`


const Body = styled.body`
  padding:20px;
  font-size: large;
  font-family: 'Josefin Sans', sans-serif;
  width: 90%;
  max-width: 1024px;
  margin: 0 auto;

  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;

`



function App() {
  return (
    <Page className="App">
      <Header className="App-header">
        <TitleImg src="./funkylogo.png" alt='logo'></TitleImg>
      </Header>
      <Body>
        <Main />
      </Body>
    </Page>
  );
}

export default App;
