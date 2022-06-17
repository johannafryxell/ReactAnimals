import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AnimalContext } from "../contexts/AnimalContext";
import { StyledButton } from "./StyledComponents/Buttons";

export const FeedButton = () => {
  const animals = useContext(AnimalContext);
  let params = useParams();

  return (
    <>
      <StyledButton
        onClick={() => {
          animals.feedAnimal(parseInt(params.id || "0"));
        }}
      >
        Mata
      </StyledButton>
    </>
  );
};
