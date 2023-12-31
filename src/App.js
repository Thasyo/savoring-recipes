//styles
import './App.css';
import { FaInfinity } from "react-icons/fa6";

//components
import Header from './components/Header/Header';

//context
import { CategoriesProvider } from './context/CategoriesVisible';
import { AuthProvider } from './context/AuthContext';

//firebase
import { onAuthStateChanged } from 'firebase/auth';
import { db } from './firebase/config';


//pages
import About from './Pages/About/About';
import Comunity from './Pages/Comunity/Comunity';
import CustomRecipes from './Pages/CustomRecipes/CustomRecipes';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Favorites from './Pages/Favorites/Favorites';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import Support from './Pages/Support/Support';
import RecipesByCategory from './Pages/RecipesByCategory/RecipesByCategory';
import RecipeInfo from './Pages/RecipeInfo/RecipeInfo';
import SearchFood from './Pages/SearchFood/SearchFood';

//react, hooks, router dom
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { useAuthentication } from './hooks/useAuthetication';
import { useState, useEffect } from 'react';


function App() {

  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if(loadingUser){
    return <div className='loadingPage'><FaInfinity/></div>
  }

  return (
    <div className="App">
      <AuthProvider value={{user}}>
        <CategoriesProvider>
          <BrowserRouter>
            <Header/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/customRecipes' element={<CustomRecipes/>}/>
              <Route path='/comunity' element={<Comunity/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/support' element={<Support/>}/>
              <Route path='/:search' element={<SearchFood/>} />
              <Route path='/recipesByCategory/:categoryName' element={<RecipesByCategory/>}/>
              <Route path='/recipeInfo/:idMeal' element={<RecipeInfo/>} />

              <Route path='/login' element={!user ? <Login/> : <Navigate to="/"/>}/>
              <Route path='/register' element={!user ? <Register/> : <Navigate to="/"/>}/>
              <Route path='/forgotPassword' element={<ForgotPassword />}/>

              <Route path='/favorites' element={<Favorites/>}/>
            </Routes>
          </BrowserRouter>
        </CategoriesProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
