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
  }
`;

export const AnimalWrapper = styled(StyledWrapper)`
  background-color: white;
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
`;

export const ImgWrapper = styled.div`
  width: 200px;
  height: 200px;
  background-color: white;
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
