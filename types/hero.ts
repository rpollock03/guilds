import { Quest } from "./quest";

export interface Hero {
  email: string;
  name: Name;
  twitter?: string;
  linkedin?: string;
  website?: string;
  bio?: string;
  quests?: Quest[];
}

export interface Name {
  first: string;
  second: string;
  last: string;
}
