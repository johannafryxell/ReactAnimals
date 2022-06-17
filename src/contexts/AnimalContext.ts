import { createContext } from "react";
import IAnimal from "../models/IAnimal";

export interface IAnimals {
  animals: IAnimal[];
  feedAnimal(id: number): void;
  feedTimer(id: number):void;
}

export const defaultAnimals: IAnimals = {
  animals: [],
  feedAnimal: (id: number) => {},
  feedTimer: (id:number) =>{}
};

export const AnimalContext = createContext(defaultAnimals);
