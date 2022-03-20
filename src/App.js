import styled from 'styled-components'


const Page = styled.div`
  // padding: 20px;
  // background-color:blue;
  // height: 100%;
`

const Img = styled.img`
  padding-top: 40px;
  padding-bottom:20px;
  width: 100%;
  height: 100%;
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
`

function App() {
  return (
    <Page className="App">
      <Header className="App-header">
        <Img src="./funkylogo.png" alt='logo'></Img>
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
      </Body>
    </Page>
  );
}

export default App;
