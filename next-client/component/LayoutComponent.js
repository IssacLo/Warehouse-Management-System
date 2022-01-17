import NavComponent from "./NavComponent";
import SidebarComponent from "./SidebarComponent";
import FooterComponent from "./FooterComponent";

const LayoutComponent = ({ children }) => {
  return (
    <div>
      <NavComponent />
      {/* <SidebarComponent /> */}
      {children}
      <FooterComponent />
    </div>
  );
};

export default LayoutComponent;
