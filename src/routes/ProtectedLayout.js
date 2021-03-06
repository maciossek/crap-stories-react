import Footer from "../components/Footer/Footer";
import ProtectedRoutes from "./protected.routes";
import { Layout } from "antd";
import Header from "../components/Header/Header";

export default function ProtectedLayout() {
  return (
    <Layout>
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <div style={{ flexGrow: 0 }}>
          <Header />
        </div>
        <div style={{ flexGrow: 1 }}>
          <Layout.Content>
            <ProtectedRoutes />
          </Layout.Content>
        </div>
        <div style={{ flexGrow: 0 }}>
          <Layout.Footer>
            <Footer />
          </Layout.Footer>
        </div>
      </div>
    </Layout>
  );
}
