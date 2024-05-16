// import './App.css'
import {LogInPage} from "@/page/LogInPage.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {SignUpPage} from "@/page/SignUpPage.tsx";
import WardrobePage from "@/page/WardrobePage.tsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<LogInPage />} ></Route>
                <Route path={'/signup'} element={<SignUpPage />}> </Route>
                <Route path={'/wardrobe'} element={<WardrobePage />}> </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
