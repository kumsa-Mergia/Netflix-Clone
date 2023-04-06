import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import ProtectedRoute from "./component/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./HomePage/Account";
import Home from "./HomePage/Home";
import Login from "./HomePage/Login";
import Signup from "./HomePage/Signup";
 const App = () => {
    return (
      <>
        <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/account' element={<ProtectedRoute><Account /> </ProtectedRoute>} />
        </Routes>
        </AuthContextProvider>
        
       </>
     )
     }
 export default App