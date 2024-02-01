import { BrowserRouter, Route, Routes } from "react-router-dom";
import {SnackbarProvider} from "notistack";
import OurRoutes from "./commons/OurRoutes"
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import AuthenticatedRoute from "./services/AuthenticatedRoute";

function App() {
    return (
        <>
            <SnackbarProvider
                maxSnack={2}
                iconVariant={{
                    success: '✅ ',
                    error: '✖️ ',
                    warning: '⚠️ ',
                    info: 'ℹ️ ',
                }}
            />
            <BrowserRouter>
                <Routes>
                    <Route path={ OurRoutes.login } element={ <LoginPage /> } />
                    <Route path={ OurRoutes.signup } element={ <SignupPage /> } />
                    <Route path={ OurRoutes.dashboard } element={
                        <AuthenticatedRoute>
                            <HomePage />
                        </AuthenticatedRoute>
                    } />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;