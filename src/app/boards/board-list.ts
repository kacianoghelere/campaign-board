import { BoardCard } from './board-card';

export interface BoardList {
  id: number;
  title: string;
  description: string;
  cards: BoardCard[];
}
