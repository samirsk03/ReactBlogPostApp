import react , {useEffect, useState} from "react"
import './App.css'
import { useDispatch } from "react-redux";
import authService from "./appWrite/auth";
import { login, logout } from "./store/authSlice";
import {Header, Footer } from "./components/Index"
import { Outlet } from "react-router-dom";

function App() {

  const [loading, setloading] = useState(true);
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login(userData))
      }else {
        dispatch(logout())
      }
    }).finally(() => { () => { setloading(false) } })
  }, [])
  

  return !loading ? (
    <>
    <h1>Still Loading</h1>
    </>
  ) : (
    <>
    <Header />
    <main>
     <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default App
