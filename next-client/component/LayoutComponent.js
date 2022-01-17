import NavComponent from "./NavComponent";
import SidebarComponent from "./SidebarComponent";
import FooterComponent from "./FooterComponent";

const LayoutComponent = ({ children }) => {
  return (
    <div className="gridContainer">
      <div className="navComponent">
        <NavComponent />
      </div>
      <div className="sideComponent">
        <SidebarComponent />
      </div>
      {children}
      {/* <div className="homeComponent">
        <HomeComponent />
      </div> */}
      {/* <FooterComponent /> */}
    </div>
  );
};

export default LayoutComponent;
