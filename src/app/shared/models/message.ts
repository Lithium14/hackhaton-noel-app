import { User } from './user';

export class Message {
  id: number;
  content: string;
  date: Date;
  user: User[];

  constructor(input?: Message) {
    if (input != null) {
    Object.assign(this , input);
    }
  }
}
