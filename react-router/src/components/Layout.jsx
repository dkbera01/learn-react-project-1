import { Outlet, useNavigation } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import GlobalSpinner from "./GlobalSpinner/GlobalSpinner";

function Layout() {
  const navigation = useNavigation();
  console.log("navigation", navigation);
  return (
    <>
      {navigation.state === "loading" && <GlobalSpinner />}
      <Header />
      <div className="container mx-auto px-4 h-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
