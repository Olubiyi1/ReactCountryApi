import Countries from "./Components/Countries";
import Country from "./Components/Country";
import Header from "./Components/Header";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Toggle from "./Components/Toggles";
import styled from "styled-components";

const App = () => {
  return ( 
    <BrowserRouter>
        <Headers>
          <Header/>
          <Toggle/>
        </Headers>
          <Routes>
            <Route path="/" element={<Countries/>}/>
            <Route exact path="/:name" element={<Country/>}/>
          </Routes>
    </BrowserRouter>
   );
}
 
export default App;

const Headers =  styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 70px;
background-color: lightgrey;
margin-bottom:30px;
`
