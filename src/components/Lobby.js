//TODO:

import { useContext } from 'react'
import Player from './Player'
import {AppContext, AppContextProvider} from './Context';


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
