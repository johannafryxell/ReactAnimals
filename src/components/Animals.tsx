import { useContext } from "react";
import { AnimalContext } from "../contexts/AnimalContext";
import {
  AnimalHeading,
  ScrollableDescription,
  StyledLink,
} from "./StyledComponents/Fonts";
import { StyledImage } from "./StyledComponents/Images";
import {
  AnimalWrapper,
  ImgWrapper,
  StyledWrapper,
} from "./StyledComponents/Wrappers";

export const Animals = () => {
  const animals = useContext(AnimalContext);

  return (
    <StyledWrapper desktopWidth="1100px" tabletWidth="90%" rowGap="20px">
        {animals.animals.map((animal) => {
          return (
            <StyledLink to={"/animal/" + animal.id} key={animal.id}>
              <AnimalWrapper direction="column">
                <ImgWrapper>
                  <StyledImage src={animal.imageUrl} alt={animal.name} />
                </ImgWrapper>
                <AnimalHeading>{animal.name}</AnimalHeading>

                <ScrollableDescription>
                  {animal.shortDescription}
                </ScrollableDescription>
              </AnimalWrapper>
            </StyledLink>
          );
        })}
    </StyledWrapper>
  );
};
