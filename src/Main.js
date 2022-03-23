// import styled from 'styled-components'
import GameImg from "./GameImg";
// import './ImgStyle.css'


// const GameImg = styled.img`
//   padding: 10px;
// //   width: 80%;
//   object-fit: scale-down;  
// `




function Main() {
  return (
    <div>
        <h1>
            Who are we? 
        </h1>
        <p>
            We are Funky Symbol. We are a family who like to make games. Not necessarily good ones. So far, we've made one.
        </p>
        <h1>
            Games
        </h1>
        <h2>
            Wordo
        </h2>
        <GameImg src="./screens-ss.png" alt='logo'/>

        <p>
            Classic word game. Try to figure out the hidden word. Guess a word and see how many correct letters you have, either in the right or the wrong place
        </p>
        <p>
            Multiple modes available
        </p>
        <ul>
            <li>
                Standard - each letter is coloured based on whether it's in the word or not
            </li> 
            <li>
                Master - see how many letters you have correct, but not which ones
            </li> 
            <li>
                Custom - change rules, word length and number of guesses
            </li> 
        </ul>
        <p>
            Track your stats to see how well you're guessing and how many guesses you take
        </p>
    </div>
  );
}

export default Main;
