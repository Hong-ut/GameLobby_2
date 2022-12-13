//TODO: use Material UI (from videos)

import { useContext, useEffect, useState } from 'react'
import Select from 'react-select'
import { Container } from '@material-ui/core'
import { AppContext, AppContextProvider } from './Context'
import axios from 'axios';


const Player = ({ player }) => { //onDelete is a function passed up (to the parent file)
    //onDelete = passed up (executed in parent func) while task = passed down (executed here)
    const { colors, setColors, players, setPlayers } = useContext(AppContext)
    //const docRef = doc(db, 'users', auth.doc)
    // use Axios to connect to cloud functions, which connects to firestore
    // getcolors (getdoc from firestore), setcolors (updatedoc)
    // URL => Axios side 

    const getColorURL = "https://us-central1-gamelobby-ecdf4.cloudfunctions.net/getColor?text=5qsdr5xIQRgFscpwOPvf";
    const [postColorURL, setPostColorURL] = useState('');
    // user's saved colors
    useEffect(() => {
        axios.get(getColorURL)
            .then(response => {
                const playerColors = response.data.result
                console.log(response.data.result);
                setPlayers([{
                    id: 1,
                    color: playerColors[0]
                },
                {
                    id: 2,
                    color: playerColors[1]
                },
                {
                    id: 3,
                    color: playerColors[2]
                },
                {
                    id: 4,
                    color: playerColors[3]
                }])
                console.log("players: ", players)
                console.log("colors: ", colors)
            })
            .catch(error => {
                // Handle any errors
            });
    }, [])


    useEffect(() => {
        console.log(postColorURL);
        // ****************CORS POLICY ERRO WHEN THIS RUNS!!!*******************************************
        if (postColorURL != "") {
            axios.get(postColorURL)
                .then(response => {
                    console.log("data posted to firebase");
                })
                .catch(error => {
                    // Handle any errors
                });
        }
    }, [postColorURL]
    )
    // ************************************************************************


    // empty dependency array means this effect will only run once (like componentDidMount in classes)

    return (
        <Container maxWidth="lg">
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
                                    color.value === player.color ? { ...color, disabled: false }
                                        : color
                                )
                            )
                        }
                        console.log("TEST: ", e.value, player.id);
                        setPostColorURL(`https://us-central1-gamelobby-ecdf4.cloudfunctions.net/postColor?text=5qsdr5xIQRgFscpwOPvf,${player.id},${e.value}`);
                        console.log(postColorURL);
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
