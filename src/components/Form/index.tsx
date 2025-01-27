import React, { useState } from "react";
import style from "./Form.module.css";
import { v4 as uuidv4 } from "uuid";

import { Input } from "../Input";
import { Button } from "../Button";
import { Select } from "../Select";
import {
  ListCollaboratorsInterface,
  ListTimeInterface,
} from "./../../interface/appInterfaces";

interface FormInterface {
  setAllCollaborators: (collaborator: ListCollaboratorsInterface) => void;
  times: ListTimeInterface[];
  setTimes: (time: any) => void;
}

export function Form({ setAllCollaborators, times, setTimes }: FormInterface) {
  const [valueCollaborator, setValueCollaborator] = useState({
    name: "",
    role: "",
    image: "",
    team: "",
    id: uuidv4(),
  });
  const [valueTime, setValueTime] = useState({
    id: uuidv4(),
    value: "",
    color: "",
  });

  const submitCollaborator = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAllCollaborators(valueCollaborator);
    setValueCollaborator({
      name: "",
      role: "",
      image: "",
      team: "",
      id: uuidv4(),
    });
  };

  const submitTimeColor = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTimes(valueTime);
    setValueTime({
      value: "",
      color: "",
      id: uuidv4(),
    });
  };

  return (
    <div className={style.sectionForm}>
      <div className={style.form}>
        <form onSubmit={(e) => submitCollaborator(e)}>
          <h2>Preencha os dados para criar o card do colaborador</h2>
          <Input
            nameLabel={"Nome"}
            palceholder={"Digite seu nome"}
            mandatory={true}
            value={valueCollaborator.name}
            onChange={(e) =>
              setValueCollaborator((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
          />
          <Input
            nameLabel={"Cargo"}
            palceholder={"Digite seu cargo"}
            mandatory={true}
            value={valueCollaborator.role}
            onChange={(e) =>
              setValueCollaborator((prev) => ({
                ...prev,
                role: e.target.value,
              }))
            }
          />
          <Input
            nameLabel={"Imagem"}
            palceholder={"Infome a URL da imagem do github"}
            mandatory={true}
            value={valueCollaborator.image}
            onChange={(e) =>
              setValueCollaborator((prev) => ({
                ...prev,
                image: e.target.value,
              }))
            }
          />
          <Select
            label={"Time"}
            options={times}
            value={valueCollaborator.team}
            setValue={(e) =>
              setValueCollaborator((prev) => ({
                ...prev,
                team: e.target.value,
              }))
            }
          />
          <Button>Enviar</Button>
        </form>
      </div>
      <div className={style.form}>
        <form onSubmit={(e) => submitTimeColor(e)}>
          <h2>Preencha os dados para criar um novo time.</h2>
          <Input
            nameLabel={"Nome do Time"}
            palceholder={"Digite o nome do time"}
            mandatory
            value={valueTime.value}
            onChange={(e) =>
              setValueTime((prev) => ({
                ...prev,
                value: e.target.value,
              }))
            }
          />
          <Input
            nameLabel={"Cor"}
            palceholder={"Escolha a cor do time"}
            mandatory
            type={"color"}
            value={valueTime.color}
            onChange={(e) =>
              setValueTime((prev) => ({
                ...prev,
                color: e.target.value,
              }))
            }
          />

          <Button>Criar um novo time</Button>
        </form>
      </div>
    </div>
  );
}
