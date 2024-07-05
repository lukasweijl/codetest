import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InsurancesPage from "./pages/InsurancesPage";
import InsurancePage from "./pages/InsurancePage";
import ContactPage from "./pages/ContactPage";
import PageNotFound from "./pages/404Page";
import AppLayout from "./layouts/AppLayout";
import "./App.scss";

/**
 * Router configuration for the application.
 * Sets up routes and their corresponding components.
 */
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/forsakringar",
        element: <InsurancesPage />,
      },
      {
        path: "/forsakringar/:insuranceType",
        element: <InsurancePage />,
      },
      {
        path: "/kontakta-oss",
        element: <ContactPage />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

/**
 * App component that provides the router to the application.
 *
 * @returns {JSX.Element} The rendered application.
 */
export default function App(): JSX.Element {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
