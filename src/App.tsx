import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import {Home, Salem} from "./pages";

function App() {
    return (
        <div className="App">

            <Routes>
                <Route path="/" element={<NavigationBar/>}>
                    {/*// @ts-ignore*/}
                    <Route index element={<Home/>}/>
                    {/*// @ts-ignore*/}
                    <Route path="salem" element={<Salem/>}/>
                    <Route path="*" element={<Home />}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
