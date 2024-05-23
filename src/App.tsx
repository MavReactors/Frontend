import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LogInPage } from "@/page/LogInPage.tsx";
import { SignUpPage } from "@/page/SignUpPage.tsx";
import WardrobePage from "@/page/WardrobePage.tsx";
import { LandingPage } from "@/page/LandingPage.tsx";
import { TrendsPage } from "@/page/TrendPage.tsx";
import { SchedulePage } from "@/page/SchedulePage.tsx";
import EditPorfile from "./page/EditPorfile";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<LandingPage />} />
                <Route path={'/login'} element={<LogInPage />} />
                <Route path={'/signup'} element={<SignUpPage />} />
                <Route path={'/wardrobe'} element={<WardrobePage />} />
                <Route path={'/trends'} element={<TrendsPage />} />
                <Route path={'/schedule'} element={<SchedulePage />} />
                <Route path={'/editPorfile'} element={<EditPorfile/>}> </Route>

            </Routes>
        </BrowserRouter>
    )
}

export default App
