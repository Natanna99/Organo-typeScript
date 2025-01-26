import React from "react";
import style from "./Banner.module.css";

interface BannerInterface {
  img: string;
  alt?: string;
}

export function Banner({ img, alt }: BannerInterface) {
  return (
    <div className={style.banner}>
      <img src={`/image/${img}`} alt={alt} />
    </div>
  );
}
