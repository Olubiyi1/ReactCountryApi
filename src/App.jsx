import Countries from "./Components/Countries";
import Country from "./Components/Country";
import Header from "./Components/Header";
// import { BrowserRouter,Routes, Route } from "react-router-dom";

const App = () => {
  return ( 
    <div>
      <Header/>
      <Countries/>
      <Country/>
    </div>
   );
}
 
export default App;