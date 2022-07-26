import { User } from './User';

export interface Post {
  id: number;
  userId: number;
  content: string;
  createdAt: string;
  author: User;
}
