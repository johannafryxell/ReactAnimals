import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IAnimal from "../../models/IAnimal";
import { StyledImage } from "../StyledComponents/Images";
import {
  ImgWrapper,
  SingleAnimal,
  StyledWrapper,
} from "../StyledComponents/Wrappers";
import { FeedButton } from "../FeedButton";
import { AnimalContext } from "../../contexts/AnimalContext";
import { DisabledButton } from "../StyledComponents/Buttons";

export const AnimalPage = () => {
  const animalObject = useContext(AnimalContext);
  const [animal, setAnimal] = useState<IAnimal>({
    id: 0,
    name: "",
    latinName: "",
    yearOfBirth: 0,
    shortDescription: "",
    longDescription: "",
    imageUrl: "",
    medicine: "",
    isFed: false,
    lastFed: "",
  });
  let params = useParams();

  useEffect(() => {
    for (let i = 0; i < animalObject.animals.length; i++) {
      if (animalObject.animals[i].id.toString() === params.id) {
        setAnimal(animalObject.animals[i]);
      }
    }
  }, [animalObject.animals]);

  useEffect(() => {
    if (animal.id === 0) return;

    animalObject.feedTimer(animal.id);
  }, [animal]);

  return (
    <SingleAnimal tabletWidth="60%" desktopWidth="700px" width="90%">
      <ImgWrapper height="300px" width="80%" bigWidth="400px">
        <StyledImage src={animal.imageUrl} alt={animal.name} />
      </ImgWrapper>

      <StyledWrapper>
        <h2>{animal.name}</h2>

        <StyledWrapper justify="space-between" columnGap="0px">
          <StyledWrapper width="70%" justify="flex-start">
            <div>
              <span>Latin name: </span>
              <span>{animal.latinName}</span>
            </div>
            <div>
              <span>Born: </span>
              <span>{animal.yearOfBirth}</span>
            </div>
            <div>
              <span>Medicine: </span>
              <span>{animal.medicine}</span>
            </div>
            <div>
              <span>Description: </span>
              <span>{animal.shortDescription}</span>
            </div>
          </StyledWrapper>
          <StyledWrapper width="30%">
            {animal.isFed ? (
              <DisabledButton disabled>Matad</DisabledButton>
            ) : (
              <FeedButton></FeedButton>
            )}
          </StyledWrapper>
        </StyledWrapper>

        <div>
          <h4>Art information</h4>
          <p>{animal.longDescription}</p>
        </div>
      </StyledWrapper>
    </SingleAnimal>
  );
};
