//was done using rface (from exetension)
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { useState, createContext, useContext } from 'react'
import Lobby from './components/Lobby';
import AppContext from './components/Context';


const App = () => {
  // All hooks are defined in App.js (highest component & Provided as context in the return statement)
  const [colors, setColors] = useState([
    { value: 'red', label: 'red', disabled: false },
    { value: 'blue', label: 'blue', disabled: false },
    { value: 'green', label: 'green', disabled: false },
    { value: 'purple', label: 'purple', disabled: false }
  ])

  const [players, setPlayers] = useState([
      {
          id: 1,
          color: 'white'
      },
      {
          id: 2,
          color: 'white'
      },
      {
          id: 3,
          color: 'white'
      },
      {
          id: 4,
          color: 'white'
      }
  ])

  return (
    // NOTE: this context is also provided for its grandchildren (X need several Providers)
    <AppContext.Provider value={{colors, setColors, players, setPlayers}}>
      <BrowserRouter>
        <div >
            <Routes>
                <Route path="/" element={<Lobby/>}/>
              {/* <Route path="/about" element={<ro/>}/> */}
            </Routes>
        </div> 
      </BrowserRouter>
    </AppContext.Provider>

  );
}

// export to index.js
export default App;
