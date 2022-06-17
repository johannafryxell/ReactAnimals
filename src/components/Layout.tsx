import { Outlet } from "react-router-dom";
import { NavLink } from "./StyledComponents/Fonts";
import { StyledHeader } from "./StyledComponents/Wrappers";

export const Layout = () => {
  return (
    <div className="layout-container">
      <StyledHeader>
          <NavLink to={"/"}>Home</NavLink>
      </StyledHeader>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};
