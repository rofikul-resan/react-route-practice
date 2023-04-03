import { useState } from "react";
import { Link, Outlet, useNavigation } from "react-router-dom";
import "./app.css";

function App() {
  const [count, setCount] = useState(0);
  const navigation = useNavigation();

  return (
    <div className="App">
      <div className="nav-link">
        <Link to={"/"}>profile</Link>
        <Link to={"/home"}>home</Link>
        <Link to={"/about"}>about</Link>
      </div>
      {navigation.state === "loading" && <p>loading ........</p>}
      <Outlet></Outlet>
    </div>
  );
}

export default App;
