import { Character } from "./character";
import { ResultInfo } from "./result-info";

export interface CharacterResult {
  info: ResultInfo;
  results: Character[]; 
}