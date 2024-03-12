import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CustomResponse } from "../models/response-model";
import { Task } from "../models/task-model";


@Injectable({
    providedIn: 'root'
  })
export class TaskService {

  // private _httpClient : HttpClient;

  private api: String = 'http://localhost:8080/task';

  constructor(private httpClient: HttpClient){
  }

  obterTarefas(){
    return this.httpClient.get<CustomResponse>(this.api + '/list');
  }

  cadastrarTarefa(task: Task){
    return this.httpClient.post<Task>(this.api + '/save', task);
  }

  deletarTarefa(id: Number){
    return this.httpClient.delete<Number>(this.api + `/delete/${id}`);
  }

  concluirTarefa(id: Number){
    return this.httpClient.put<Number>(this.api + `/finish/${id}`, {});
  }

  editarTarefa(id: Number, task: Task){
    return this.httpClient.put<Number>(this.api + `/edit/${id}`, task)
  }
}
