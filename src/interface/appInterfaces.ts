export interface ListTimeInterface {
  id: string;
  value: string;
  color: string;
}

export interface ListCollaboratorsInterface {
  id: string;
  name: string;
  image: string;
  role: string;
  team?: string;
  fav?: boolean;
}
