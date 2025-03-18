import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import OnBoarding from "./components/OnBoarding.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Provider from "./components/Provider.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="font-body">
      <Router>
        <Provider>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/signup" exact element={<Signup />} />
            <Route
              path="/profile"
              exact
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="/onboarding"
              exact
              element={
                <PrivateRoute>
                  <OnBoarding />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard"
              exact
              element={
                <PrivateRoute>
                  <Navbar />
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
