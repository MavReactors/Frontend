// import './App.css'
import {LogInPage} from "@/page/LogInPage.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {SignUpPage} from "@/page/SignUpPage.tsx";
import WardrobePage from "@/page/WardrobePage.tsx";
import {LandingPage} from "@/page/LandingPage.tsx";
import EditPorfile from "./page/EditPorfile";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<LandingPage/>} ></Route>
                <Route path={'/login'} element={<LogInPage />} ></Route>
                <Route path={'/signup'} element={<SignUpPage />}> </Route>
                <Route path={'/wardrobe'} element={<WardrobePage />}> </Route>
                <Route path={'/editPorfile'} element={<EditPorfile/>}> </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
