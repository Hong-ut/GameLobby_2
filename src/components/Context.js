import { createContext, useState } from 'react';

const AppContext = createContext();

const AppContextProvider = ({children}) => {
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
    ]);
    
    const [colors, setColors] = useState([
        { value: 'red', label: 'red', disabled: false },
        { value: 'blue', label: 'blue', disabled: false },
        { value: 'green', label: 'green', disabled: false },
        { value: 'purple', label: 'purple', disabled: false }
      ]);

    return (
        <AppContext.Provider value = {{players, setPlayers, colors, setColors}}>
            {children}
        </AppContext.Provider>
    );
};


export { AppContext, AppContextProvider };
