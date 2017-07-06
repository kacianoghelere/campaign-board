import { BoardList } from './board-list';

/**
 * Board interface
 */
export interface Board {
  id: number;
  title: string;
  description?: string;
  favorite?: boolean;
  lists?: BoardList[];
}
