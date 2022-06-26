export enum Gender {
  Femail = "F",
  Mail = "M",
}

export interface User {
  id: string;
  name: string;
  photo: string;
  gender: Gender;
  description: string;
}

export interface CountryClub {
  id: string;
  address: string;
  photo: string;
}

export interface Team {
  id: string;
  user: string; // id of user
}

export interface Rounding {
  id: string;
  when: string; // iso date string
  where: string; // id of country club
  photo: string;
  description: string;
  host: string; // id of user
  team: string; // id of team
  chatroom: string;
}

export interface Rate {
  id: string;
  rounding: string; //id of rounding
  rater: string; // id of user
  ratee: string; // id of user
  rate: number;
}
