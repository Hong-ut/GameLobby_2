//TODO:

import { useContext } from 'react'
import Player from './Player'
import AppContext from './Context';
import { Button } from '@material-ui/core';


const Lobby = () => {
    const {players} = useContext(AppContext)

    return (
        <div>
            <>
                {players.map((player) => (
                    <Player key={player.id} player={player} />
                ))}
            </>
        </div>
    )
}


export default Lobby;
