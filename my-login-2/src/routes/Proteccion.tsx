import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProv";

export default function Proteccion() {
  const auth = useAuth();

  return auth.isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}