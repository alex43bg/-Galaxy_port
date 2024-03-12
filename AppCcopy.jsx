import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Pages/Home/Home'
import Projects from './Pages/Projects/Projects'
import Skils from "./Pages/Skils/Skils"

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
