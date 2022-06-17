import { Link } from "react-router-dom";
import styled from "styled-components";

export const AnimalHeading = styled.h3`
  padding: 0px;
  margin-top: 10px;
  text-align: center;
  color: black;
`;

export const Description = styled.p`
  padding: 10px;
  color: black;
`;

export const NavLink = styled(Link)`
  margin-left: 40px;
  margin-bottom: 20px;
  color: #205c2e;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
