//was done using rface (from exetension)
//import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Lobby from './components/Lobby';
import { AppContextProvider } from './components/Context';
import React from 'react';

const App = () => {
  // All hooks are defined in App.js (highest component & Provided as context in the return statement)

  

  return (
    // NOTE: this context is also provided for its grandchildren (X need several Providers)
      <AppContextProvider>
        <Lobby />
          
      </AppContextProvider>
  );
}

// export to index.js
export default App;
