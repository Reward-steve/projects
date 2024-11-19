import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={"/"}> Counter/Step-Project</NavLink>
        </li>
        <li>
          <NavLink to={"/Travel-List"}>Travel List</NavLink>
        </li>
        <li>
          <NavLink to={"/"}>Services</NavLink>
        </li>
        <li>
          <NavLink to={"/"}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
