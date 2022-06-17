import { Link } from "react-router-dom";
import styled from "styled-components";

interface IStyledWrapperProps {
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  width?: string;
  rowGap?: string;
  desktopWidth?: string;
  tabletWidth?: string;
}

export const StyledWrapper = styled.div`
  display: flex;
  column-gap: 20px;
  row-gap: ${(props: IStyledWrapperProps) => props.rowGap || "0px"};
  flex-direction: ${(props: IStyledWrapperProps) => props.direction || "row"};
  justify-content: ${(props: IStyledWrapperProps) => props.justify || "center"};
  align-items: ${(props: IStyledWrapperProps) => props.align || "center"};
  flex-wrap: ${(props: IStyledWrapperProps) => props.wrap || "wrap"};
  width: ${(props: IStyledWrapperProps) => props.width || "100%"};

  //Breakpoint desktop
  @media (min-width: 980px) {
    width: ${(props: IStyledWrapperProps) => props.tabletWidth || "100%"};
  }
  @media (min-width: 1200px) {
    width: ${(props: IStyledWrapperProps) => props.desktopWidth || "100%"};
    /* column-gap: 0px; */
  }
`;

export const DisplayAnimals = styled(StyledWrapper)`
  justify-content: space-around;
`;

export const AnimalWrapper = styled(Link)`
  display: flex;
  background-color: white;
  width: 90%;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  &:hover {
    box-shadow: 0px 0px 4px 2px #d3c1a4;
  }

  @media (min-width: 980px) {
    width: 30%;
    flex-direction: column;
  }

  @media (min-width: 1200px) {
    width: 22%;
  }
`;

export const InfoWrapper = styled.div`
  width: 50%;
  height: 200px;
  @media (min-width: 980px) {
    width: 100%;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 70vh;
`;
interface IImgWrapperProps {
  width?: string;
  bigWidth?: string;
}

export const ImgWrapper = styled.div`
  width: ${(props: IImgWrapperProps) => props.width || "100%"};
  height: 200px;
  background-color: white;

  @media (min-width: 980px) {
    width: ${(props: IImgWrapperProps) => props.bigWidth || "100%"};
  }
`;

export const LogoWrapper = styled.div`
  width: 400px;
  margin-top: 120px;
`;

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;
