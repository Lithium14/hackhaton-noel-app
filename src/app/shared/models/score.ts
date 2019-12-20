import { User } from './user';
import { World } from './world';

export class Score {
  id: number;
  score: number;
  user: User[];
  world: World[];

  constructor(input?: Score) {
    if (input != null) {
    Object.assign(this , input);
    }
  }
}
