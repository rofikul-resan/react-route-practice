import { useState } from "react";
import { Link, NavLink, Outlet, useNavigation } from "react-router-dom";
import "./app.css";

function App() {
  const [count, setCount] = useState(0);
  const navigation = useNavigation();
  console.log(navigation);

  return (
    <div className="App">
      <div className="nav-link">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/"}
        >
          profile
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/home"}
        >
          home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/about"}
        >
          about
        </NavLink>
      </div>
      {navigation.state === "loading" && <p>loading ........</p>}
      <Outlet></Outlet>
    </div>
  );
}

export default App;
