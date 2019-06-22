import React from 'react';
import { WSAEPFNOSUPPORT } from 'constants';

const Header = (props) => {
  
  const buttonGen = () => {
    let buttonContainer = [];

    let result = [];
    props.movies.map(movie => {
       result.push(<button className={movie} key={movie} onClick={() => props.search({movie}) }>{movie}</button>);
    })
    buttonContainer.push(<div>{result}</div>);
    return buttonContainer
  }

  return (
    <div>
      <h1> Marvel Cinematic Universe </h1>
      <div>
      {buttonGen()}
      </div>
    </div>
  )
}

export default Header;


// 'Iron Man','The Incredible Hulk','Iron Man 2','Thor','Captain America: The First Avenger','The Avengers','Iron Man 3','Thor: The Dark World','Captain America: The Winter Soldier','Guardians of the Galaxy','Avengers: Age of Ultron','Ant-Man','Captain America: Civil War','Doctor Strange','Guardians of the Galaxy Vol. 2','Spider-Man: Homecoming','Thor: Ragnarok','Black Panther','Avengers: Infinity War','Ant-Man and the Wasp','Captain Marvel','Avengers: Endgame'