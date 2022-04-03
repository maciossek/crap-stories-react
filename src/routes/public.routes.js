/* istanbul ignore file */
import { Route, Routes } from "react-router-dom";
import NotFound from "../views/error/NotFoundView";
import LoginRoutes from "../views/login/Login.routes";
import { RouteName } from "./routesnames";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route path={`${RouteName.LOGIN}/*`} element={<LoginRoutes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
