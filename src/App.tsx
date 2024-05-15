// import './App.css'
import {LogInPage} from "@/page/LogInPage.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {SignUpPage} from "@/page/SignUpPage.tsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<LogInPage />} ></Route>
                <Route path={'/signup'} element={<SignUpPage />}> </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
