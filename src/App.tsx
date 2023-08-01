import "./App.scss";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Overview from "./pages/Overview/Overview";
import Topbar from "./components/Sidebar/Topbar/Topbar";
import Products from "./pages/Products/Products";
import Customers from "./pages/Customers/Customers";
import Orders from "./pages/Orders/Orders";
import Settings from "./pages/Settings/Settings";
import Payments from "./pages/Payments/Payments";
import Tickets from "./pages/Tickets/Tickets";
import FAQs from "./pages/FAQs/FAQs";

function App() {
  const Layout = () => {
    return (
      <div className="app center">
        <div className="container">
          <Sidebar />
          <div className="mainContainer">
            <Topbar />
            <main>
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Overview /> },
        { path: "/products", element: <Products /> },
        { path: "/customers", element: <Customers /> },
        { path: "/orders", element: <Orders /> },
        { path: "/settings", element: <Settings /> },
        { path: "/payments", element: <Payments /> },
        { path: "/tickets", element: <Tickets /> },
        { path: "/faqs", element: <FAQs /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
