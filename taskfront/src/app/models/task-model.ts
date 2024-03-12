import { Prioridade } from "../enum/prioridade";

export interface Task {
  id?: Number,
  titulo: String,
  descricao: String,
  responsavel: String,
  prioridade: Prioridade,
  deadline: Date,
  situacao: Boolean
}
