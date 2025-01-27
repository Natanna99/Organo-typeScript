import { useState } from "react";
import { Banner } from "./components/Banner";
import { Form } from "./components/Form";
import { Sections } from "./components/Sections";
import "./font";
import { v4 as uuidv4 } from "uuid";
import {
  ListCollaboratorsInterface,
  ListTimeInterface,
} from "./interface/appInterfaces";

function App() {
  const [times, setTimes] = useState([
    { id: uuidv4(), value: "Front-end", color: "#82cffa" },
    { id: uuidv4(), value: "Back-end", color: "#57c278" },
    { id: uuidv4(), value: "Mobile", color: "#ffba05" },
    { id: uuidv4(), value: "DevOps", color: "#e06b69" },
    {
      id: uuidv4(),
      value: "Data Science",
      color: "#a6d157",
    },
  ]);
  const [allCollaborators, setAllCollaborators] = useState<
    ListCollaboratorsInterface[]
  >([]);

  /**
   * Função que adiciona um novo colaborador
   * @param {Array} collaborator
   */
  const addCollaborator = (collaborator: ListCollaboratorsInterface) => {
    setAllCollaborators((prev) => [...prev, collaborator]);
  };

  /**
   * Função que adiciona um novo time
   * @param {string} time
   */
  const addNewTime = (time: ListTimeInterface) => {
    setTimes((prev) => [...prev, time]);
  };

  /**
   * Função que deleta um colaborador
   * @param {string} id
   */
  const deleteCollaborators = (id: string) => {
    setAllCollaborators((prev) =>
      prev.filter((collaborator) => collaborator?.id !== id)
    );
  };

  /**
   * Função que adiciona um colaborador aos favoritos
   * @param {string} id
   */
  const favoriteCollaborator = (id: string) => {
    setAllCollaborators((prev) => {
      return prev?.map((collaborator) =>
        collaborator?.id === id
          ? { ...collaborator, fav: !collaborator?.fav }
          : collaborator
      );
    });
  };

  console.log(allCollaborators);

  return (
    <div className="App">
      <Banner img={"organo.png"} alt="Banner" />
      <Form
        setAllCollaborators={addCollaborator}
        times={times}
        setTimes={addNewTime}
      />
      {times?.map((time) => (
        <Sections
          nameTime={time?.value}
          color={time?.color}
          id={time?.id}
          listCollaborators={allCollaborators?.filter(
            (collaborator) => collaborator?.team === time?.value
          )}
          deleteCollaborators={deleteCollaborators}
          setTimes={setTimes}
          favoriteCollaborator={favoriteCollaborator}
        />
      ))}
    </div>
  );
}

export default App;
