import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

//Pages
import RootLayout from "../layouts/RootLayout/RootLayout";
import Monitoring from "../pages/Monitoring/Monitoring";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Login/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Login />}></Route>
      <Route path="monitoring/:id" element={<Monitoring />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  ),
  {
    basename: import.meta.env.PROD ? "/SportSee/" : "/",
  }
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
