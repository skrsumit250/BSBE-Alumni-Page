import './App.css'
import Footer from './components/Footer';
import LandingPage from './components/LandingPage/landingPage.jsx';
import TeamPage from './components/Directory/teams.jsx';
import Alumnipage from './components/Directory/alumni.jsx'
import Login from './components/Auth/Login.jsx';
import UserProfileForm from './components/Auth/UserForm.jsx';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
function App(){
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/team' element={<TeamPage/>} />
          <Route path='/directory' element={<Alumnipage/>} />
          <Route path='/auth' element={<Login/>} />
          <Route path='/form' element={<UserProfileForm/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}
export default App;

