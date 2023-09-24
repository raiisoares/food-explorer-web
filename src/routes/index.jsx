import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "../routes/auth.routes";
import { AdminRoutes } from "../routes/admin.routes";
import { USER_ROLE } from '../utils/roles';
import { useAuth } from "../hooks/auth";

export function Routes() {
  const { user, signOut } = useAuth();

  function AccessRoutes() {
    switch (user.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />
        break;
      case USER_ROLE.CUSTOMER:
        return <CostumerRoutes />
        break;
      default:
        return <AdminRoutes />;
    }
  }

  return (
    <BrowserRouter>
      {user ? <AccessRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
}