export interface IPlayers {
  id: string,
  firstName: string,
  lastName: string,
  fullName?: string,
  picture: string,
  points: number,
  rank: number,
  country: {
    code: string,
    name: string,
    picture?: string;
  }
}

export interface IPlayer extends IPlayers {
  age: number,
  weight: number,
  height: number,
  birthYear: number,
  careerTitles: Array<any>
}

export interface IStatistics {
  IMCMoyen: number;
  paysRatioSorted: Array<{ ratio: number; name: string; }>
  tailleMediane: number;
}