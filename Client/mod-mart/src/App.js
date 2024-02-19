
import { Navigate, Route,Routes,} from 'react-router-dom'
import SignUp from './Components/Signup/Signup'
import Userlogin from './Components/Login page/User/Userlogin'
import Home from "./Components/Home/Home"
import Adminlogin from './Components/Login page/Admin/Adminlogin'
import Products from './Components/Admind/Products'


function App() {


   const token =localStorage.getItem('token')
  return (

    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/userlogin" element={<Userlogin/>}/>
      <Route path='/adminlogin' element={<Adminlogin/>}/>
       <Route path='*' element={<Navigate to ='/err404'/>}/>
       <Route path='/product' element={<Products/>}/>
    </Routes>
    </>
  );
}

export default App;
