import style from "./Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CardInterface {
  color: string;
  name: string;
  img: string;
  date: Date;
  role: string;
  deleteCollaborators: () => void;
  favoriteCollaborator: () => void;
  fav?: boolean;
}

export function Card({
  color,
  name,
  img,
  role,
  date,
  deleteCollaborators,
  favoriteCollaborator,
  fav,
}: CardInterface) {
  /**
   * @description - Verifica se a url é válida
   * @param url - url da imagem
   * @returns
   */
  const isValidUrl = (url: string) => {
    return url && (url.includes("https") || url.includes("http"));
  };

  const imageDefault =
    "https://img.myloview.com.br/adesivos/avatar-cabeca-perfil-silhueta-chamada-centro-masculino-foto-700-151766550.jpg";

  return (
    <div className={style.collaborators}>
      <div className={style.containerClose}>
        <FontAwesomeIcon
          icon={["fas", "xmark"]}
          onClick={deleteCollaborators}
          className={style.deleteButton}
        />
      </div>

      <div className={style.headerCard} style={{ background: color }}>
        <img
          className={style.imgCard}
          src={isValidUrl(img) ? img : imageDefault}
          alt="colaborador"
        />
      </div>
      <div className={style.footerCard}>
        <h4>{name}</h4>
        <h5>{role}</h5>
        <h5>{new Date(date).toLocaleDateString()}</h5>
        <div className={style.favorite}>
          <FontAwesomeIcon
            onClick={favoriteCollaborator}
            icon={fav ? ["fas", "heart"] : ["far", "heart"]}
          />
        </div>
      </div>
    </div>
  );
}
