import { useContext } from "react";
import { AnimalContext } from "../contexts/AnimalContext";
import { AnimalHeading, Description } from "./StyledComponents/Fonts";
import { StyledImage } from "./StyledComponents/Images";
import {
  AnimalWrapper,
  DisplayAnimals,
  ImgWrapper,
  InfoWrapper,
  StyledWrapper,
} from "./StyledComponents/Wrappers";

export const Animals = () => {
  const animals = useContext(AnimalContext);

  return (
    <StyledWrapper desktopWidth="1100px" tabletWidth="90%">
      <DisplayAnimals rowGap="20px" align="flex-start">

      {animals.animals.map((animal) => {
        return (
          <AnimalWrapper to={"/animal/" + animal.id} key={animal.id}>
            <ImgWrapper width="50%">
              <StyledImage src={animal.imageUrl} alt={animal.name} />
            </ImgWrapper>
            <InfoWrapper>
              <AnimalHeading>{animal.name}</AnimalHeading>
              <Description>
                {animal.shortDescription}
              </Description>
            </InfoWrapper>
          </AnimalWrapper>
        );
      })}
      </DisplayAnimals>
    </StyledWrapper>
  );
};
