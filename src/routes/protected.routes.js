/* istanbul ignore file */
import { Route, Routes, Navigate } from "react-router-dom";
import NotFound from "../views/error/NotFoundView";
import HomeRoutes from "../views/home/Home.routes";
import { RouteName } from "./routesnames";

export default function ProtectedRoutes() {
  return (
    <Routes>
      <Route
        path={RouteName.INDEX}
        element={<Navigate to={RouteName.HOME} />}
      />
      <Route path={`${RouteName.HOME}/*`} element={<HomeRoutes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
