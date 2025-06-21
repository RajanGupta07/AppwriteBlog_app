import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authslice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-100 inline-block px-6 py-2 duration-200 rounded-full"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
