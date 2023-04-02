import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import "./NavBar.css";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/">Home</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/rules">Rules</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}