import React from 'react';
/* Components */
import NavBar from '../components/NavBar';
import GameBlock from '../components/GameBlock';
/* Img */
import Roulette from '../assets/img/roulette.png';
import blackJack from '../assets/img/blackjack.png';

const Home = () => {
    return(
        <div className='page home-container'>
            <NavBar />
            <div className='home'>
                <GameBlock img={Roulette} name={"Roulette"}/>
                <GameBlock img={blackJack} name={"Black Jack"}/>
            </div>
        </div> 
    )
}

export default Home;