import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme, selectTheme } from "../features/counter/counterSlice";

function Header() {
  const dispatch = useDispatch();
  const darkTheme = useSelector(selectTheme);
  return (
    <div>
      <button onClick={() => dispatch(changeTheme())}>
        {darkTheme ? "Light theme" : "Dark theme"}
      </button>
    </div>
  );
}

export default Header;
