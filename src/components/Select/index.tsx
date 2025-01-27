import React from "react";
import style from "./Select.module.css";
import { ListTimeInterface } from "./../../interface/appInterfaces";

interface SelectInterface {
  label: string;
  options: ListTimeInterface[];
  setValue: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

export function Select({ label, options, setValue, value }: SelectInterface) {
  return (
    <div className={style.grupSelect}>
      <label>{label}</label>
      <select required onChange={setValue} value={value}>
        <option value="">Selecione</option>
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
}
