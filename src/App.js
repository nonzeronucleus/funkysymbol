import styled from 'styled-components'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import Main from './Main'
import TitleImg from "./TitleImg";

const Page = styled.div`
`

const Header = styled.header`
  width:100%;
  background-color:brown;
  display: flex;
  justify-content: center;
`

// const TitleImg = styled.img`
//   max-height:128px;
//   padding-top: 20px;
//   padding-bottom:10px;
//   width: 100%;
//   height: 100%;
//   object-fit: scale-down;  
// `



const Body = styled.div`
  // padding:20px;
  font-size: large;
  @media (min-width: 768px) {
    font-size: xx-large;
  }
  font-family: 'Josefin Sans', sans-serif;
  width: 90%;
  max-width: 1024px;
  margin: 0 auto;

  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 0px;
`



function App() {
  console.log(process.env.REACT_APP_SC_DISABLE_SPEEDY)
  return (
    <Page className="App">
      <Header className="App-header">
        <TitleImg src="./funkylogo.png" alt='logo'/>
      </Header>
      <Body>
        <Main />
      </Body>
    </Page>
  );
}

export default App;
