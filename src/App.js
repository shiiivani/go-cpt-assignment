import "./App.css";
import ChangePassword from "./components/ChangePassword";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import UploadNote from "./components/UploadNote";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/uploadNote" element={<UploadNote />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/changePassword" element={<ChangePassword />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
