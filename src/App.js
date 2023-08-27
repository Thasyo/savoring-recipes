//styles
import './App.css';

//components
import Header from './components/Header/Header';
import { CategoriesProvider } from './context/CategoriesVisible';

//pages
import About from './Pages/About/About';
import Comunity from './Pages/Comunity/Comunity';
import Courses from './Pages/Courses/Courses';
import CustomRecipes from './Pages/CustomRecipes/CustomRecipes';
import Donate from './Pages/Donate/Donate';
import Home from './Pages/Home/Home';
import Suport from './Pages/Suport/Suport';

import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <CategoriesProvider>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/customRecipes' element={<CustomRecipes/>}/>
            <Route path='/comunity' element={<Comunity/>}/>
            <Route path='/courses' element={<Courses/>}/>
            <Route path='/Donate' element={<Donate/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/suport' element={<Suport/>}/>
          </Routes>
        </BrowserRouter>
      </CategoriesProvider>
    </div>
  );
}

export default App;
