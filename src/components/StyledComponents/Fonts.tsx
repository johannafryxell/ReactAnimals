import { Link } from "react-router-dom";
import styled from "styled-components";

export const AnimalHeading = styled.h3`
  padding: 0px;
  margin: 0px;
  text-decoration: none;
  color: black;
`;

export const ScrollableDescription = styled.p`
  width: 180px;
  overflow: auto;
  height: 80px;
  color: black;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const NavLink = styled(StyledLink)`
  margin-left: 40px;
  color: #205C2E;
`;
