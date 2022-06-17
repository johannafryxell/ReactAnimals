import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AnimalContext } from "../contexts/AnimalContext";

export const FeedButton = () => {
  const animals = useContext(AnimalContext);
  let params = useParams();

  return (
    <>
      <button onClick={()=> {animals.feedAnimal(parseInt(params.id || "0"))}}>Mata</button>
    </>
  );
};
