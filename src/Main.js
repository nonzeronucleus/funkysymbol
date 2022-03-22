// import styled from 'styled-components'
import './ImgStyle.css'


// const GameImg = styled.img`
//   padding: 10px;
// //   width: 80%;
//   object-fit: scale-down;  
// `

function Main() {
  return (
    <>
        <h1>
            Who are we? 
        </h1>
        <p>
            We are Funky Symbol. We are a family who like to make games. Not necessarily good ones. But games nonetheless
        </p>
        <h1>
            Games
        </h1>
        <h2>
            Wordo
        </h2>
        <img className="Inline-Img"  src="./screens-ss.png" alt="screens"></img>  
        <p>
            Classic word game. Try to figure out the hidden word. Guess a word and see how many correct letters you have, either in the right or the wrong place
        </p>
        <p>
            Multiple modes available - either showing which letters are correct or, for a harder challenge, only how many you've got right
        </p>
        <p>
            Custom modes also available to create your own game
        </p>
    </>
  );
}

export default Main;
