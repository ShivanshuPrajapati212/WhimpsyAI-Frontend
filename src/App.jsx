import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/userContext';
import Home from './components/Home';
import Login from './components/Login.jsx';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import OnBoarding from './components/OnBoarding.jsx';

function App() {
  return (
    <div className='font-body'>
    <Router>
      <AuthProvider>
      <UserProvider>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/profile" exact element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="/onboarding" exact element={<PrivateRoute><OnBoarding /></PrivateRoute>} />
        </Routes>
      </UserProvider>
      </AuthProvider>
    </Router>
    </div>
  );
}

export default App;
