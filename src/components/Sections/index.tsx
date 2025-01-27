import React from "react";
import style from "./Section.module.css";
import { Card } from "../Card";
import hexToRgba from "hex-to-rgba";
import {
  ListCollaboratorsInterface,
  ListTimeInterface,
} from "./../../interface/appInterfaces";

interface SectionsInterface {
  nameTime: string;
  color: string;
  id: string;
  listCollaborators: ListCollaboratorsInterface[];
  setTimes: (value: any) => void;
  deleteCollaborators: (id: string) => void;
  favoriteCollaborator: (id: string) => void;
}

export function Sections({
  nameTime,
  color,
  id,
  listCollaborators,
  deleteCollaborators,
  setTimes,
  favoriteCollaborator,
}: SectionsInterface) {
  /**
   * Altera a cor do time
   * @param {object} e
   */
  const updateColor = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    setTimes((prev: ListTimeInterface[]) =>
      prev?.map((time) =>
        time?.id === id ? { ...time, color: e.target.value } : time
      )
    );
  };

  return (
    <>
      {listCollaborators?.length > 0 && (
        <div
          className={style.section}
          style={{
            backgroundImage: `url('/image/fundo.png')`,
            background: hexToRgba(color, "0.6"),
            border: `0.063rem solid ${color}`,
          }}
        >
          <div className={style.containerInput}>
            <input
              type="color"
              className={style.inputColor}
              value={color}
              onChange={(e) => {
                updateColor(e, id);
              }}
            />
          </div>

          <h3
            className={style.titleSection}
            style={{
              color: "var(--black)",
              borderBottom: `0.25rem solid ${color}`,
            }}
          >
            {nameTime}
          </h3>
          <div className={style.containerCards}>
            {listCollaborators?.map((collaborator) => (
              <Card
                color={color}
                name={collaborator?.name}
                img={collaborator?.image}
                role={collaborator?.role}
                deleteCollaborators={() =>
                  deleteCollaborators(collaborator?.id)
                }
                favoriteCollaborator={() =>
                  favoriteCollaborator(collaborator?.id)
                }
                fav={collaborator?.fav}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
