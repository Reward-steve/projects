import { useState } from "react";
import { NavLink } from "react-router-dom";

let navObj = [
  {
    NavText: "Counter/Step-Project",
    linkTo: "/",
  },
  {
    NavText: "Travel-List",
    linkTo: "/Travel-List",
  },
  {
    NavText: "Accordion",
    linkTo: "/Accordion",
  },
  {
    NavText: "Tip Calculator",
    linkTo: "/Tip-Calculator",
  },
  {
    NavText: "EatAndSplit",
    linkTo: "/EatAndSplit",
  },
];
export default function NavBar() {
  const [isActive, setIsActive] = useState(null);

  return (
    <nav>
      {navObj.map((el, i) => {
        return (
          <List
            key={i}
            list={el}
            index={i}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        );
      })}
    </nav>
  );
}

function List({ list, index, isActive, setIsActive }) {
  const active = index === isActive;
  return (
    <ul>
      <li key={list.id} onClick={() => setIsActive(index)}>
        <NavLink
          style={{ color: `${active ? "white" : "gray"}` }}
          to={list.linkTo}
        >
          {list.NavText}
        </NavLink>
      </li>
    </ul>
  );
}
