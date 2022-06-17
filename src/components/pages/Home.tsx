import {
  HeroWrapper,
  LogoWrapper,
  StyledWrapper,
} from "../StyledComponents/Wrappers";
import { Animals } from "../Animals";
import { StyledLogo } from "../StyledComponents/Images";

export const Home = () => {
  return (
    <>
      <HeroWrapper>
        <LogoWrapper>
          <StyledLogo src="artemis.png" />
        </LogoWrapper>
      </HeroWrapper>
      <StyledWrapper>
        <Animals></Animals>
      </StyledWrapper>
    </>
  );
};
