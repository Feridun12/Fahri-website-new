import Sidebar from "./sidebar/Sidebar";
import "../styles/Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-details-wrapper">
        <p className="navbar-detail">Fahri Erbulak</p>
        <p className="navbar-detail">+90 533 851 9561</p>
      </div>
      <Sidebar />
    </div>
  );
};

export default Navbar;
