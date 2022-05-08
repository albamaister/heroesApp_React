import { Routes, Route, Link, BrowserRouter  } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { DcScreen } from "../components/dc/DcScreen";
import { LoginScreen } from '../components/login/LoginScreen';
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { Navbar } from "../components/ui/Navbar";
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const Appdiv = () => {

//   const {user} = useContext(AuthContext);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/*" element={ <DashboardRoutes/> }/>
            </Routes>
        </BrowserRouter>
    )
}


