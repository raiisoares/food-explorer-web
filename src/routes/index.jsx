import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "../routes/auth.routes";
import { AppRoutes } from "../routes/app.routes";

export function Routes() {
  return (
    <BrowserRouter>
      {<AppRoutes />}
    </BrowserRouter>
  );
}