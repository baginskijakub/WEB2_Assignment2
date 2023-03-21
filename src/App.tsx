import React from 'react';
import {Home} from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navbar} from "./components/navigation/Navbar";
import {About} from "./pages/About";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/about'} element={<About/>}/>
            </Routes>
        </BrowserRouter>


    </div>
  );
}

export default App;
