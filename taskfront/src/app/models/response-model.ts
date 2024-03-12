import { Task } from './task-model';
export interface CustomResponse {
  timeStamp: Date;
  statusCode: number;
  status: string;
  reason: string;
  message: string;
  data: {
    tasks?: Task[],
    task?: Task
  };
}
