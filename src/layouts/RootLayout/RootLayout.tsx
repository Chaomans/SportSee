import { Outlet } from "react-router-dom";
import NavSide from "../../components/NavSide/NavSide";
import NavTop from "../../components/NavTop/NavTop";

const RootLayout = () => {
  return (
    <>
      <NavTop />
      <NavSide />
      <Outlet />
    </>
  );
};

export default RootLayout;
