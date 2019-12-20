import { Score } from './score';

export class World {
  id: number;
  world: string;
  scores: Score[];

  constructor(input?: World) {
    if (input != null) {
    Object.assign(this , input);
    }
  }
}
