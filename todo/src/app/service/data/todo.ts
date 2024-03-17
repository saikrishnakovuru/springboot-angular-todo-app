export interface Todo {
  id: number;
  description: string;
  done: boolean;
  targetDate: Date;
}
export class TodoImpl implements Todo {
  constructor(
    public id: number = 0,
    public description: string = '',
    public done: boolean = false,
    public targetDate: Date = new Date()
  ) {}
}
