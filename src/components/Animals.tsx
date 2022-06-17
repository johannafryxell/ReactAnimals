import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimalContext } from "../contexts/AnimalContext";
import { AnimalHeading } from "./StyledComponents/Fonts";
import { StyledImage } from "./StyledComponents/Images";
import {
  AnimalWrapper,
  ImgWrapper,
  StyledWrapper,
} from "./StyledComponents/Wrappers";

export const Animals = () => {
  const animals = useContext(AnimalContext);

  return (
    <StyledWrapper desktopWidth="900px" tabletWidth="90%" rowGap="20px">
      {animals.animals.map((animal) => {
        return (
          <Link to={"/animal/" + animal.id} key={animal.id}>
            <AnimalWrapper direction="column">
              <ImgWrapper>
                <StyledImage src={animal.imageUrl} alt={animal.name} />
              </ImgWrapper>
              <AnimalHeading>{animal.name}</AnimalHeading>
              
            </AnimalWrapper>
          </Link>
        );
      })}
    </StyledWrapper>
  );
};
