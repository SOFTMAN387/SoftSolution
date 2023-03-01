import {Routes,Route} from "react-router-dom";
import Home from "./components/home/Home";
import "./App.css";
function App() {
  return (
  <>

     <Routes>
      <Route  exact path="/" element={<Home />}/>
    </Routes>
  </>
  );
}

export default App;
