import { Link, Outlet } from "react-router-dom";
import { StyledLogo } from "./StyledComponents/Images";
import { LogoWrapper, StyledHeader } from "./StyledComponents/Wrappers";

export const Layout = () => {
  return (
    <div className="layout-container">
      <StyledHeader>
        <nav>
          <Link to={"/"}>Home</Link>
        </nav>
      </StyledHeader>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};
