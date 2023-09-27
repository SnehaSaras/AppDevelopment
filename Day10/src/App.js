import Dashboard from './components/admin/Dashboard/Dashboard';
import Home from './components/Users/Home';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Policies from './components/admin/Policies/Policies';
import Document from './components/admin/Documents/Document';
import Claims from './components/admin/Settings/Claims';
import Help from './components/admin/Help/Help';
import Customer from './components/admin/Customer/Customer';
import Login from './components/Login';
import Signup from './components/Signup';
import Terms from './components/Terms';
import Policy from './components/Policy';
import UserHelp from './components/Users/UserHelp';
import Application from './components/Users/Application';
import HomeLog from './components/Users/HomeLog';
import UserPolicy from './components/Users/UserPolicy';
import UserTerms from './components/Users/UserTerms';
import AboutUs from './components/Users/AboutUs';
import { useUser } from './components/context/UserContext';
import { UserProvider } from './components/context/UserContext';



function App() {
  const PrivateRoute = ({ children }) => {
    const { isUserLoggedIn } = useUser();
    return isUserLoggedIn ? children : <Navigate to="/" replace />;
};

  return (
    <div className="App">
      <UserProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/adminPolicies' element={
                    <PrivateRoute>
                        <Policies/>
                    </PrivateRoute>}></Route>
          <Route path='/adminDocument' element={
                    <PrivateRoute>
                        <Document/>
                    </PrivateRoute>}></Route>
          <Route path='/adminClaims' element={
                    <PrivateRoute>
                        <Claims/>
                    </PrivateRoute>}></Route>
          <Route path='/adminHelp' element={
                    <PrivateRoute>
                        <Help/>
                    </PrivateRoute>}></Route>
          <Route path='/adminCustomer' element={
                    <PrivateRoute>
                        <Customer/>
                    </PrivateRoute>}></Route>
          <Route path='/adminDashboard' element={
                    <PrivateRoute>
                        <Dashboard/>
                    </PrivateRoute>} />
          <Route path='/adminTerms' element={
                    <PrivateRoute>
                        <Terms/>
                    </PrivateRoute>}></Route>
          <Route path='/UserTerms' element={<UserTerms/>}></Route>
          <Route path='/adminPolicy' element={<Policy/>}></Route>
          <Route path='/UserPolicy' element={
                    <PrivateRoute>
                        <Policy/>
                    </PrivateRoute>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/Homelog' element={
                    <PrivateRoute>
                        <HomeLog />
                    </PrivateRoute>} />
          <Route path='/UserHelp' element={<UserHelp/>}></Route>
          <Route path='/application' element={<Application/>}></Route>
          <Route path='/AboutUs' element={<AboutUs/>}></Route>


        </Routes>
      </Router>
      </UserProvider>
    </div>
  );
}

export default App;

