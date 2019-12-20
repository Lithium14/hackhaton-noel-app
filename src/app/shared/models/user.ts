import { Score } from './score';
import { Message } from './message';

export class User {
  id: number;
  email: string;
  pseudo: string;
  password: string;
  score: Score[];
  message: Message[];

  constructor(input?: User) {
    if (input != null) {
    Object.assign(this , input);
    }
  }

}
