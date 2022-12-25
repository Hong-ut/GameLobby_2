//TODO:

import { useContext } from 'react'
import Player from './Player'
import {AppContext, AppContextProvider} from './Context';


const Lobby = ({ docID }) => {
    const {players} = useContext(AppContext)

    return (
        <div>
            <>
                {players.map((player) => (
                    <Player key={player.id} player={player} docID={docID} />
                ))}
            </>
        </div>
    )
}


export default Lobby;
