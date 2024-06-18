import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRouter() {
  const login = useSelector((state) => state.handleSubmitForm);
  const currentUser = login.currentUser || null;
  return (
    <div>{currentUser !== null ? <Outlet /> : <Navigate to="/" />}</div>
  );
}
