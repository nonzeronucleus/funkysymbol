import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import Main from './Main'
import Privacy from './Privacy'
import TitleImg from "./TitleImg";

const Page = styled.div`
`

const Header = styled.header`
  width:100%;
  background-color:brown;
  display: flex;
  justify-content: center;
`

const Body = styled.div`
  font-size: large;
  @media (min-width: 768px) {
    font-size: xx-large;
    padding-left:20px;
    padding-right:20px;
  }
  font-family: 'Josefin Sans', sans-serif;
  width: 90%;
  max-width: 1024px;
  margin: 0 auto;

  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 0px;
  padding:0px;
`



const MenuBar = styled.nav `
  width: 100%;
  margin: 0 auto;

  background-color:brown;
  height: 100%;
`


const Menu = styled.ul `
  width: 90%;
  max-width: 1024px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  height:32px;
  @media (min-width: 768px) {
    height: 64px;
  }  
`


const MenuItem = styled.li`
  display: inline;
  &:hover a:not(.active) {
    background-color: darkred;
  }
  padding-top: 16px;
  @media (min-width: 768px) {
    padding-bottom: 32px;
  }
  height: 100%;

  .active {
    background-color: floralwhite;
    color:black;
  }  
`

const StyledLink = styled(NavLink)`
  text-align: center;
  height: 40px;
  padding-top: 8px;
  @media (min-width: 768px) {
    padding-top: 16px;
  }
  padding-left:16px;
  padding-right:16px;
  height: 75%;
  display: inline-block;
  text-decoration: none;
  color:yellow;
`



function App() {
  console.log(process.env.REACT_APP_SC_DISABLE_SPEEDY)
  return (
    <Page className="App">
      <Header className="App-header">
        <TitleImg src="./funkylogo.png" alt='logo'/>
      </Header>
        <Router>
          <MenuBar>
            <Body>
              <Menu>
                <MenuItem><StyledLink to="/" activeclassname="active">Home</StyledLink></MenuItem>
                <MenuItem><StyledLink to="/privacy" activeclassname="active">Privacy</StyledLink></MenuItem>
              </Menu>
            </Body>          
          </MenuBar>
          <Body>
            <Routes>
              <Route path="/" element={<Main />}/>            
              <Route path="/privacy" element={<Privacy />}/>            
            </Routes>
          </Body>
        </Router>        
    </Page>
  );
}

export default App;
