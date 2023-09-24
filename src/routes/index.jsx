import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "../routes/auth.routes";
import { AdminRoutes } from "../routes/admin.routes";
import { USER_ROLE } from "../utils/roles";
import { useAuth } from "../hooks/auth";
import { api } from "../services/api";

export function Routes() {
  const { user, signOut } = useAuth();

  // useEffect(() => {
  //   api.get("/users/validated").catch((error) => { if (error.response?.status === 401) signOut() })
  // }, [])

  function AccessRoutes() {
    switch (user.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />;
      case USER_ROLE.CUSTOMER:
        return <CostumerRoutes />;
      default:
        return <AdminRoutes />;
    }
  }

  return (
    <BrowserRouter>{user ? <AccessRoutes /> : <AuthRoutes />}</BrowserRouter>
  );
}
S