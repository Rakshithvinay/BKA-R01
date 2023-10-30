import "./navbar.css"
import {Link} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Register from "../../pages/register/Register"
import Login from "../../pages/login/Login"

const Navbar = () => {
  const handleRegister = () => {
    
    navigate("/register")
    
  };
  const handleLogin = () => {
    
    navigate("/login")
    
  };
  const navigate = useNavigate();
  const {user} = useContext(AuthContext)
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to ="/" style = {{color:"inherit", textDecoration: "none"}}>
        <span className="logo">booking</span>
        </Link>
        
        {user ? user.username : (
          <div className="navItems">
            <button className="headerBtn" onClick={handleRegister}>
                  Register
                </button>
                <button className="headerBtn" onClick={handleLogin}>
                  Login
                </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar