export interface ICharacter {}

export interface IApiResult {
  info: IInfo;
  results: ICharacter[];
}

export interface IInfo {
  count: number;
  pages: number;
  next: string;
  prev: any;
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: IOrigin;
  location: ILocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface IOrigin {
  name: string;
  url: string;
}

export interface ILocation {
  name: string;
  url: string;
}

export interface IDTOFavorite {
  IdCharacter: number;
  IdUser: string;
  nameCharacter: string;
  caracterUrlImagen: string;
  token: string;
}

export interface IFavoritePostDTO {
  ok: boolean;
  msg?: string;
  errors?: string;
}

export interface IGetFavoritePayload {
  ok: boolean;
  favorites: IDTOFavorite[];
}
