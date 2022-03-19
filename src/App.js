import styled from 'styled-components'


const Page = styled.div`
  // padding: 20px;
  // background-color:blue;
  // height: 100%;
`

const Img = styled.img`
  padding-top: 40px;
  padding-bottom:20px;
`

const Header = styled.header`
width:100%;
background-color:cadetblue;
display: flex;


justify-content: center;
`

const Body = styled.body`
  padding:20px;
`

function App() {
  return (
    <Page className="App">
      <Header className="App-header">
        <Img src="./funkylogo.png" alt='logo'></Img>
      </Header>
      <Body>
        We make games
      </Body>
    </Page>
  );
}

export default App;
