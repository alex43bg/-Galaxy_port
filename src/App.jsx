import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skils from "./Pages/Skils";
import Home from './Pages/Home'
import Projects from './Pages/Projects'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home />}/>
          <Route path='/home' element = {<Home />}/>
          <Route path='/skils' element = {<Skils />}/>
          <Route path='/projects' element = {<Projects />}/>
        </Routes>
      </BrowserRouter>
      {/* <Home/> */}
    </>
  );
};

export default App;
