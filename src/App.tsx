import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { AnimalPage } from "./components/pages/AnimalPage";
import { Home } from "./components/pages/Home";
import { Layout } from "./components/Layout";
import { NotFound } from "./components/pages/NotFound";
import { useEffect, useState } from "react";
import {
  AnimalContext,
  defaultAnimals,
  IAnimals,
} from "./contexts/AnimalContext";
import { ANIMALS_KEY } from "./services/StorageService";
import axios from "axios";
import IAnimal from "./models/IAnimal";

export const App = () => {
  const [animalObject, setAnimalObject] = useState<IAnimals>(defaultAnimals);

  //SÄTTER VÄRDE PÅ LISTAN MED DJUR
  useEffect(() => {
    const storedAnimals = localStorage.getItem(ANIMALS_KEY);
    if (storedAnimals) {
      setAnimalObject(JSON.parse(storedAnimals));
    } else if (!storedAnimals) {
      axios
        .get<IAnimal[]>("https://animals.azurewebsites.net/api/animals")
        .then((result) => {
          setAnimalObject({ ...animalObject, animals: result.data });
        });
    }
  }, []);

  //MATA DJUR
  animalObject.feedAnimal = (id: number) => {
    let animalPlace = animalObject.animals.findIndex((a) => a.id === id);
    let animal = animalObject.animals[animalPlace];

    animal.isFed = true;
    animal.lastFed = new Date().toString();

    setAnimalObject({ ...animalObject, animals: [...animalObject.animals] });
    localStorage.setItem(ANIMALS_KEY, JSON.stringify(animalObject));
  };

  //CHECKA MATNING
  animalObject.feedTimer = (id: number) => {
    let animalPlace = animalObject.animals.findIndex((a) => a.id === id);
    let animal = animalObject.animals[animalPlace];

    let difference =
      (Date.now() - new Date(animal.lastFed).getTime()) / 3600000;
    if (difference > 3) {
      animal.isFed = false;
    }

    console.log([...animalObject.animals]);
    
    setAnimalObject({ ...animalObject, animals: [...animalObject.animals] });
    localStorage.setItem(ANIMALS_KEY, JSON.stringify(animalObject));
  };

  return (
    <div className="App">
      <AnimalContext.Provider value={animalObject}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />}></Route>
              <Route path="/animal/:id" element={<AnimalPage />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AnimalContext.Provider>
    </div>
  );
};

export default App;
