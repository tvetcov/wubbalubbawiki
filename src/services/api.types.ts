export interface ICharacters {
    info: IMetaInfo;
    result: Array<ICharacter>;
}

export interface IMetaInfo {
    count: number;
    pages: number;
    next: string;
    prev: string;
}

interface ICharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: ILocation;
    location: ILocation;
    image: string;
    episode: Array<string>;
    url: string;
    created: string;
}

interface ILocation {
    name: string;
    url: string;
}
