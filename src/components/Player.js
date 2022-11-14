//TODO: use Material UI (from videos)

import { useContext } from 'react'
import AppContext from './Context'
import Select from 'react-select'
import { Container } from '@material-ui/core'

const Player = ({ player }) => { //onDelete is a function passed up (to the parent file)
    //onDelete = passed up (executed in parent func) while task = passed down (executed here)
    const {colors, setColors, players, setPlayers} = useContext(AppContext)

    return (
        <Container maxWidth="ls">
            <div className='container' style={{ backgroundColor: player.color }}>
                <Select
                    options={colors}
                    placeholder={'Player ' + player.id + ' Color'}
                    onChange={(e) => {
                        console.log(player.id, e)
                        setPlayers(
                            players.map((play) =>
                                play.id === player.id ? { ...play, color: e.value }
                                    : play
                            ))
                        if (player.color != "white") {
                            setColors(
                                colors.map((color) => 
                                    color.value === player.color ? { ...color, disabled: false}
                                        : color
                                )
                            )
                            console.log(player.color)
                        }
                        // ****************
                        //QUESTION: WHY DOES the code below WORK? I didn't use setColors here...
                        //I didn't use setColors but colors (referred by e here) still changes...
                        // *************
                        e.disabled = true;
                    }}
                    isOptionDisabled={(option) => option.disabled}
                />
            </div>
        </Container>
    )
}
export default Player;