import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading ";

function Layout() {
  const navigation = useNavigation();
  return (
    <div>
      <Navbar />
      {navigation.state == "submitting" ? (
        "SAving..."
      ) : navigation.state == "loading" ? (
        <Loading />
      ) : (
        <Outlet />
      )}
      {/* <Outlet /> */}
      <Footer />
    </div>
  );
}

export default Layout;
